// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721SignatureMint.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

using Counters for Counters.Counter;

struct VideoAsset {
    uint256 tokenId;
    string title;
    string description;
    Counters.Counter likes;
    Counters.Counter comments;
}

struct VideoAssetComment {
    uint256 tokenId;
    string comment;
    address author;
}

struct VideoAssetInit {
    string title;
    string description;
}

contract Onpeer is ERC721SignatureMint {
    mapping(uint256 => VideoAsset) private videoAssets;
    // likeHash: hash of video asset id and address of liker
    // likeHash => isLiked
    mapping(uint256 => bool) private videoAssetLiked;
    // commentHash: hash of video asset id and address of author
    // commentHash => comment
    mapping(uint256 => VideoAssetComment) private videoAssetComment;

    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient
    )
        ERC721SignatureMint(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps,
            _primarySaleRecipient
        )
    {}

    /// @dev Mints tokens according to the provided mint request.
    function mintWithSignature(
        MintRequest calldata _req,
        VideoAssetInit calldata _videoAssetInit,
        bytes calldata _signature
    ) external payable virtual returns (address signer) {
        require(_req.quantity == 1, "quantiy must be 1");

        uint256 tokenIdToMint = nextTokenIdToMint();

        // Verify and process payload.
        signer = _processRequest(_req, _signature);

        address receiver = _req.to;

        // Collect price
        _collectPriceOnClaim(
            _req.primarySaleRecipient,
            _req.quantity,
            _req.currency,
            _req.pricePerToken
        );

        // Mint tokens.
        _setTokenURI(tokenIdToMint, _req.uri);
        _safeMint(receiver, _req.quantity);
        videoAssets[tokenIdToMint] = VideoAsset(
            tokenIdToMint,
            _videoAssetInit.title,
            _videoAssetInit.description,
            Counters.Counter(0),
            Counters.Counter(0)
        );

        emit TokensMintedWithSignature(signer, receiver, tokenIdToMint, _req);
    }

    function like(uint256 _tokenId) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");
        uint256 likeHash = uint256(keccak256(abi.encodePacked(_tokenId, msg.sender)));

        require(!videoAssetLiked[likeHash], "Already liked");
    
        videoAssets[_tokenId].likes.increment();
        videoAssetLiked[likeHash] = true;
    }

    function comment(uint256 _tokenId, string calldata _comment) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");
        uint256 commentHash = uint256(keccak256(abi.encodePacked(_tokenId, msg.sender)));

        require(videoAssetComment[commentHash].tokenId == 0, "Already commented");

        videoAssets[_tokenId].comments.increment();
        videoAssetComment[commentHash] = VideoAssetComment(_tokenId, _comment, msg.sender);
    }
}
