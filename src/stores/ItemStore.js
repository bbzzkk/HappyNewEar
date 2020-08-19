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

  options = [
      { key: 1, text: "1개", value: 1 },
      { key: 2, text: "2개", value: 2 },
      { key: 3, text: "3개", value: 3 },
      { key: 4, text: "4개", value: 4 },
      { key: 5, text: "5개", value: 5 },
    ];

  @observable 
  itemData = ItemData;

  @observable
  selectedCategory = ItemData[0];

  @observable
  itemDetail = ItemData[0].items[0];

  @observable
  itemQuantity = 0

  @observable
  cartBtnClicked = false;

  @observable
  totalAmount = 0

  @computed
  get _cartBtnClicked() {
      return this.cartBtnClicked;
  }
  
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
    this.selectedCategoryId=categoryId
    this.itemDetail = this.itemData
      .find((categoryItems) => {
        return categoryItems.id === this.CATEGORY_ID_MAP[categoryId];
      }).items.find((item) => {
        return item.id === parseInt(productId)
      });
  }

  @action
  clickCategory(categoryId) {
    this.selectedCategory = ItemData;
    this.selectedCategory = this.selectedCategory.find(
      (categoryItems) => categoryItems.id === categoryId
    );
  }

  @action
  selectCategory(categoryId) {
    this.selectedCategory = this.itemData.find(
        (categoryItems) =>{
        return categoryItems.id === this.CATEGORY_ID_MAP[categoryId];
      });
  }
  
  @action
  clickCartBtn() {
      if (this.cartBtnClicked === true) {
          this.cartBtnClicked = false;
      } else {
          this.cartBtnClicked = true;
      }
  }
}