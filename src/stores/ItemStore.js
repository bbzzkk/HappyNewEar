import { observable, computed, action } from 'mobx';

import ItemData from "../data/ItemData";

export default class ItemStore {
  constructor(root) {
    this.root = root;
  }

  CATEGORY_ID_MAP = {
    case: 1,
    keyring: 2,
    sticker: 3
  }

  @observable 
  itemData = ItemData;

  @observable
  selectedCategory = ItemData[0];

  @observable
  itemDetail = ItemData[0].items[0];

  @observable selectedCategoryId = ''
  @observable selectedItemId = ''

  @action
  selectItemDetail(categoryId, productId){
    this.itemDetail = this.itemData
      .find((categoryItems) => {
        return categoryItems.id === this.CATEGORY_ID_MAP[categoryId];
      }).items.find((item) => {
        return item.id === parseInt(productId)
      });
      console.log(this.itemDetail)
  }

  @action
  clickCategory(categoryId) {
    this.selectedCategory = ItemData; //초기화
    this.selectedCategory = this.selectedCategory.find(
      (categoryItems) => categoryItems.id === categoryId
    );
  }

  // 라우터 연결
  @action
  selectCategory(categoryId) {
    this.selectedCategory = this.itemData.find(
        (categoryItems) =>{
        return categoryItems.id === this.CATEGORY_ID_MAP[categoryId];
      });
  }
  
  @action
  clickItem(itemId, categoryId) {
    this.itemDetail = ItemData[0].items[0]; // 초기화
    this.itemData = ItemData; // 초기화
    const categoryItems = (this.itemData = this.itemData.find(
      (Json) => Json.id === categoryId
    )); // 걸러준 카테고리의 items배열을 가져온다.
    const items = categoryItems.items;
    this.itemDetail = items.find((item) => item.id === itemId); // items 배열의 id를 이용해서 해당 아이템을 가져온다.
    console.log(this.itemDetail);
    this.itemData = ItemData; // 초기화  
  }

  @action
  selectItem(itemId, categoryId) {
  }
  
}