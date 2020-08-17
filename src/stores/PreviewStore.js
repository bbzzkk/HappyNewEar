import { observable, computed, action } from 'mobx';

import ItemJson from '../data/ItemJson';

export default class PreviewStore {
  constructor(root) {
    this.root = root;
  }
  @observable ItemJson = ItemJson;
}
