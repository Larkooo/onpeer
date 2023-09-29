## onpeer
onpeer is a decentralized streamable-like website to upload videos and mint them as NFTs on the Polygon blockchain.

The whole idea behind onpeer is uploading videos to a peer to peer network, like Livepeer or IPFS, but also proving that those videos have been uploaded by you, and letting others interact with them on-chain, which makes everything effectively provable and archivable. 

This project is still WIP so major structural or conceptual changes might occur.

### Contract
onpeer contract has been written using solidity using the ERC721 protocol with a signature based minting is currently deployed on Polygon.

- Minting video
- Setting metadata (title, description for now)
- Liking a video
- Commenting a video (irreversible)

### Concept
1. uploading a video to onpeer
2. onpeer will store that video using a peer to peer storage solution
3. onpeer will sign a payload and return it to the user with the signature needed to mint their specific video
4. user chooses to mint or not the video
	1. minting: video becomes persistent and interactable with
	2. not minting: video is temporarily stored on a peer to peer storage solution and deleted 24h after 




