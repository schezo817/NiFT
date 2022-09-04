// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract NFTMarketplace is ERC721URIStorage, IERC2981 {
    //NFTを作るのに必要なコンテナ(?) インクリメント・デクリメントのみできるデータ型
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    //販売価格
    uint256 listingPrice = 0.00010 ether;
    //送金可能なユーザ
    address payable owner; 
    //NFT発行者
    address makeNFTer;
    //royaltyの割合
    uint96 royaltypercent;
    //nftidとnftの中身のマップ
    mapping(uint256 => MarketItem) private idToMarketItem;
    //構造体
    struct MarketItem {
      uint256 tokenId;
      address payable seller;
      address payable owner;
      uint256 price;
      bool sold;
    }

    //作ったトークン情報の連絡
    event MarketItemCreated (
      uint256 indexed tokenId,
      address seller,
      address owner,
      uint256 price,
      bool sold
    );

    //初期動作
    constructor(string memory name,string memory symbol) ERC721(name, symbol) {
      //所有者をこのコンストラクタを呼んだアドレスに
      owner = payable(msg.sender);
    }

    //販売価格の更新
    function updateListingPrice(uint _listingPrice) public payable {
      //販売価格の変更許可の確認 
      require(owner == msg.sender, "You have no right to change the price.");
      listingPrice = _listingPrice;
    }

    //販売価格の取得
    function getListingPrice() public view returns (uint256) {
      return listingPrice;
    }

    //トークンの作成
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
      //トークンのidを+1  
      _tokenIds.increment();
      //トークンidの割り当て
      uint256 newTokenId = _tokenIds.current();
      //nftの発行
      _mint(msg.sender, newTokenId);
      //メタデータの割り当て
      _setTokenURI(newTokenId, tokenURI);
      createMarketItem(newTokenId, price);

      return newTokenId;
    }
    //
    function createMarketItem(uint256 tokenId, uint256 price) private {
      //価格は自然数
      require(price > 0, "Price must be at least 1 money");
      //販売価格とマーケットでの価格の一致
      require(msg.value == listingPrice, "Price must be equal to listing price");

      //情報の決定
      idToMarketItem[tokenId] =  MarketItem(
        tokenId,
        payable(msg.sender),
        payable(address(this)),
        price,
        false
      );

      //トークン保有権の移転
      _transfer(msg.sender, address(this), tokenId);
      emit MarketItemCreated(
        tokenId,
        msg.sender,
        address(this),
        price,
        false
      );
    }

    //トークンの再販
    function resellToken(uint256 tokenId, uint256 price) public payable {
      //トークンの所有者であるかの確認
      require(idToMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this operation");
      //販売価格とマーケットでの価格一致
      require(msg.value == listingPrice, "Price must be equal to listing price");
      //データの更新
      idToMarketItem[tokenId].sold = false;
      idToMarketItem[tokenId].price = price;
      idToMarketItem[tokenId].seller = payable(msg.sender);
      idToMarketItem[tokenId].owner = payable(address(this));
      _itemsSold.decrement();
      //トークン保有権の移転
      _transfer(msg.sender, address(this), tokenId);
    }
    //出品
    function createMarketSale(uint256 tokenId) public payable {
      //価格
      uint price = idToMarketItem[tokenId].price;
      //
      address payable creator = idToMarketItem[tokenId].seller;
      //販売価格のマーケットでの価格一致
      require(msg.value == price, "Please submit the asking price in order to complete the purchase");
      //データの更新
      idToMarketItem[tokenId].owner = payable(msg.sender);
      idToMarketItem[tokenId].sold = true;
      idToMarketItem[tokenId].seller = payable(address(0));
      _itemsSold.increment();
      //トークン保有権の移転
      _transfer(address(this), msg.sender, tokenId);
      payable(owner).transfer(listingPrice);
      payable(creator).transfer(msg.value);
    }
    //royalty情報の送信
    function royaltyInfo(uint256 tokenId,uint256 salePrice) public view virtual override returns (address, uint256){
        uint256 royaltyAmont = salePrice * royaltypercent / 100;
        address reciver = makeNFTer;
        require(reciver != address(0), "ERC2981: invalid receiver");
        return (reciver, royaltyAmont);
    }
    //royaltyの取得
    function getRoyalPercent() public view returns (uint256){
        return royaltypercent;
    }
    //royaltyの更新
    function updateRoyalPercent(uint96 _royaltyPercent) public payable{
      require(makeNFTer == msg.sender, "You have no right to change the royalty.");
      royaltypercent = _royaltyPercent;
    }
    
}