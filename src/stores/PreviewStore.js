import { observable, computed, action } from 'mobx';

import ItemJson from '../data/ItemJson';

export default class PreviewStore {
  constructor(root) {
    this.root = root;
  }

  @observable ItemJson = ItemJson;

  @observable 
  itemjson = ItemJson;

  @observable
  caselist = ItemJson[0].items;

  @observable
  keyringlist = ItemJson[1].items;

  @observable
  stickerlist = ItemJson[2].items;

  @action
  selectCategory(){
      
  }    
}