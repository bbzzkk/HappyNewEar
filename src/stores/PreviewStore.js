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
  
  @observable
  ItemDetail = ItemJson;

  @observable
  ItemDetailObject = ItemJson[0].items[0];

  @action
  CategoryClick(SelectCategoryId) {
      this.SelectCategory = ItemJson;
      const temp = this.SelectCategory.find((Json) => Json.id === SelectCategoryId);
      
      this.SelectCategory = temp;
      console.log(this.SelectCategory);
  }
  
  @action
  ItemClickDetail(itemsId, categoryId) {
    this.ItemDetail = ItemJson; // 먼저 카테고리를 걸러준다. 
    const temp = this.ItemDetail.find((Json) => Json.id === categoryId);
    
    this.ItemDetail = temp; // 걸러준 카테고리의 items배열을 가져온다. 
    const tmp = temp.items;
    
    const what = tmp.find((tmp) => tmp.id === itemsId); // items 배열의 id를 이용해서 해당 아이템을 가져온다.
    
    this.ItemDetailObject = what;

    console.log(this.ItemDetailObject);
  }

}