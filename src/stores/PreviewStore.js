import { observable, computed, action } from 'mobx';

import ItemJson from '../data/ItemJson';

export default class PreviewStore {
  constructor(root) {
    this.root = root;
  }

  @observable 
  itemjson = ItemJson;

  @observable
  SelectCategory = ItemJson;

  @action
  CategoryClick(SelectCategoryId) {
      this.SelectCategory = ItemJson;
      const temp = this.SelectCategory.find((Json) => Json.id === SelectCategoryId);
      
      this.SelectCategory = temp;
      console.log(this.SelectCategory);
  }      
}