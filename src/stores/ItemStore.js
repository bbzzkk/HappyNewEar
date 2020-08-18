import { observable, computed, action } from 'mobx';

import ItemData from "../data/ItemJson";

export default class ItemStore {
  constructor(root) {
    this.root = root;
  }

  @observable 
  ItemData = ItemData;

  @observable
  SelectCategory = {};
  
  @observable
  ItemDetail = {};

  @observable
  ItemDetailObject = ItemData[0].items[0];

  @action
  CategoryClick(categoryId) {
    this.SelectCategory = ItemData; //초기화
    this.SelectCategory = this.SelectCategory.find(
      (Json) => Json.id === categoryId
    );
  }
  
  @action
  ItemClickDetail(itemId, categoryId) {
    const categoryItems = (this.ItemDetail = this.ItemDetail.find(
      (Json) => Json.id === categoryId
    )); // 걸러준 카테고리의 items배열을 가져온다. 
    
    const items = categoryItems.items;

    this.ItemDetailObject = items.find((item) => item.id === itemId); // items 배열의 id를 이용해서 해당 아이템을 가져온다.
    
  }
}