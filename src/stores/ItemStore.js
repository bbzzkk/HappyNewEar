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

  @observable
  itemQuantity = 0

  @observable
  totalAmount = 0

  @computed
  get _itemQuantity(){
    return this._itemQuantity>0? this.itemQuantity : 0
  }

  @computed
  get _totalAmount(){
    return(
      this.itemDetail && this.itemQuantity > 0 ?
      this.itemDetail.price * this.itemQuantity : 0
    )
  }

  @action
  setQuantity(number){
    this.itemQuantity = number
  }

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
}