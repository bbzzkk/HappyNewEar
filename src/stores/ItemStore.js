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

  @action
  clickCategory(categoryId) {
    this.selectedCategory = ItemData; //초기화
    this.selectedCategory = this.selectedCategory.find(
      (categoryItems) => categoryItems.id === categoryId
    );
  }

  // 라우터 연결
  @action
  selectCategory(categoryUrlParam) {
    // this.selectedCategory = ItemData; //초기화
    this.selectedCategory = this.selectedCategory.find(
      (categoryItems) =>
        categoryItems.id === this.CATEGORY_ID_MAP[categoryUrlParam]
    );
  }
  
  @action
  clickItem(itemId, categoryId) {
    const categoryItems = (this.ItemDetail = this.ItemDetail.find(
      (Json) => Json.id === categoryId
    )); // 걸러준 카테고리의 items배열을 가져온다. 
    const items = categoryItems.items;
    this.ItemDetailObject = items.find((item) => item.id === itemId); // items 배열의 id를 이용해서 해당 아이템을 가져온다.
  }
}