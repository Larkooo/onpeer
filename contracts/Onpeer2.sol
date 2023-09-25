// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/extension/SignatureMintERC721.sol";
import "@thirdweb-dev/contracts/lib/CurrencyTransferLib.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";
import "@thirdweb-dev/contracts/extension/PrimarySale.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

using Counters for Counters.Counter;

struct VideoAsset {
    string uid;
    uint256 tokenId;
    string title;
    string description;
    Counters.Counter likes;
    Counters.Counter comments;
}

struct VideoAssetComment {
    string uid;
    string comment;
    address author;
}

struct VideoAssetInit {
    string title;
    string description;
}

contract Onpeer2 is ERC721, Ownable, PrimarySale, SignatureMintERC721 {
    mapping(uint256 => VideoAsset) private videoAssets;
    // likeHash: hash of video asset id and address of liker
    // likeHash => isLiked
    mapping(uint256 => bool) private videoAssetLiked;
    // uid => comments
    mapping(string => VideoAssetComment[]) private videoAssetComments;

    event VideoAssetCreated(
        string uid,
        uint256 tokenId,
        string title,
        string description,
        address author
    );

    event VideoAssetMetadataUpdated(
        string uid,
        string title,
        string description,
        address author
    );

    event VideoAssetLiked(string uid, address liker);
    event VideoAssetUnliked(string uid, address liker);

    event VideoAssetCommented(string uid, string comment, address author);

    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _primarySaleRecipient
    ) ERC721(_name, _symbol) {
        _setupOwner(_defaultAdmin);
        _setupPrimarySaleRecipient(_primarySaleRecipient);
    }

    /// @dev Collects and distributes the primary sale value of NFTs being claimed.
    function _collectPriceOnClaim(
        address _primarySaleRecipient,
        uint256 _quantityToClaim,
        address _currency,
        uint256 _pricePerToken
    ) internal virtual {
        if (_pricePerToken == 0) {
            require(msg.value == 0, "!Value");
            return;
        }

        uint256 totalPrice = _quantityToClaim * _pricePerToken;

        bool validMsgValue;
        if (_currency == CurrencyTransferLib.NATIVE_TOKEN) {
            validMsgValue = msg.value == totalPrice;
        } else {
            validMsgValue = msg.value == 0;
        }
        require(validMsgValue, "Invalid msg value");

        address saleRecipient = _primarySaleRecipient == address(0)
            ? primarySaleRecipient()
            : _primarySaleRecipient;
        CurrencyTransferLib.transferCurrency(
            _currency,
            msg.sender,
            saleRecipient,
            totalPrice
        );
    }

    /// @dev Mints tokens according to the provided mint request.
    function mintWithSignature(
        MintRequest calldata _req,
        bytes calldata _signature
    ) external payable virtual returns (address signer) {
        uint256 tokenIdToMint = uint256(_req.uid);

        // Verify and process payload.
        signer = _processRequest(_req, _signature);

        address receiver = _req.to;

        // Collect price
        _collectPriceOnClaim(
            _req.primarySaleRecipient,
            1,
            _req.currency,
            _req.pricePerToken
        );

        // Mint tokens.
        _safeMint(receiver, tokenIdToMint);
        videoAssets[tokenIdToMint] = VideoAsset(
            _req.uri,
            tokenIdToMint,
            "",
            "",
            Counters.Counter(0),
            Counters.Counter(0)
        );

        emit TokensMintedWithSignature(signer, receiver, tokenIdToMint, _req);
        emit VideoAssetCreated(_req.uri, tokenIdToMint, "", "", receiver);
    }

    /// @dev Mints tokens according to the provided mint request.
    function mint(
        MintRequest calldata _req,
        VideoAssetInit calldata _videoAssetInit,
        bytes calldata _signature
    ) external payable virtual returns (address signer) {
        uint256 tokenIdToMint = uint256(_req.uid);

        // Verify and process payload.
        signer = _processRequest(_req, _signature);

        address receiver = _req.to;

        // Collect price
        _collectPriceOnClaim(
            _req.primarySaleRecipient,
            1,
            _req.currency,
            _req.pricePerToken
        );

        // Mint tokens.
        _safeMint(receiver, tokenIdToMint);
        videoAssets[tokenIdToMint] = VideoAsset(
            _req.uri,
            tokenIdToMint,
            _videoAssetInit.title,
            _videoAssetInit.description,
            Counters.Counter(0),
            Counters.Counter(0)
        );

        emit TokensMintedWithSignature(signer, receiver, tokenIdToMint, _req);
        emit VideoAssetCreated(_req.uri, tokenIdToMint, _videoAssetInit.title, _videoAssetInit.description, receiver);
    }

    function setVideoAssetMetadata(
        uint256 _tokenId,
        string calldata _title,
        string calldata _description
    ) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");
        require(msg.sender == ownerOf(_tokenId), "Not authorized");

        videoAssets[_tokenId].title = _title;
        videoAssets[_tokenId].description = _description;

        emit VideoAssetMetadataUpdated(
            videoAssets[_tokenId].uid,
            _title,
            _description,
            msg.sender
        );
    }

    function like(uint256 _tokenId) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");
        uint256 likeHash = uint256(
            keccak256(abi.encodePacked(videoAssets[_tokenId].uid, msg.sender))
        );

        require(!videoAssetLiked[likeHash], "Already liked");

        videoAssets[_tokenId].likes.increment();
        videoAssetLiked[likeHash] = true;

        emit VideoAssetLiked(videoAssets[_tokenId].uid, msg.sender);
    }

    function undoLike(uint256 _tokenId) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");
        uint256 likeHash = uint256(
            keccak256(abi.encodePacked(videoAssets[_tokenId].uid, msg.sender))
        );

        require(videoAssetLiked[likeHash], "Not liked");

        videoAssets[_tokenId].likes.decrement();
        videoAssetLiked[likeHash] = false;

        emit VideoAssetUnliked(videoAssets[_tokenId].uid, msg.sender);
    }

    function comment(uint256 _tokenId, string calldata _comment) external {
        require(videoAssets[_tokenId].tokenId != 0, "Token does not exist");

        videoAssetComments[videoAssets[_tokenId].uid].push(
            VideoAssetComment(videoAssets[_tokenId].uid, _comment, msg.sender)
        );
        videoAssets[_tokenId].comments.increment();

        emit VideoAssetCommented(videoAssets[_tokenId].uid, _comment, msg.sender);
    }

    function videoAsset(
        uint256 _tokenId
    ) external view returns (VideoAsset memory) {
        return videoAssets[_tokenId];
    }

    function comments(
        uint256 _tokenId
    ) external view returns (VideoAssetComment[] memory) {
        return videoAssetComments[videoAssets[_tokenId].uid];
    }

    /// @dev Returns whether primary sale recipient can be set in the given execution context.
    function _canSetPrimarySaleRecipient()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return msg.sender == owner();
    }

    /// @dev Returns whether a given address is authorized to sign mint requests.
    function _canSignMintRequest(
        address _signer
    ) internal view virtual override returns (bool) {
        return _signer == owner();
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }
}
