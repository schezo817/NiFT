// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "../../../node_modules/@openzeppelin/contracts/utils/Context.sol";
import "../../../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    //手数料(とりあえず固定)
    uint256 listingPrice = 0.00010 ether;
    //受け取り相手のウォレットアドレス
    address payable owner;
    //ブロックチェーン上に載せる情報
    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    //所有者の初期化
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        owner = payable(msg.sender);
    }

    //送金
    function mint(address to) public virtual {
        _mint(to, totalSupply());
    }

    //手数料の変更
    function updateListingPrice(uint256 _listingPrice) public payable {
        require(owner == msg.sender);
        listingPrice = _listingPrice;
    }

    //手数料の取得
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    //新しいトークンの作成
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }
}
