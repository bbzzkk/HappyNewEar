import { observable, computed, action } from 'mobx';
import ItemJson from '../ItemJson';

class ItemStore {
    @observable ItemJson = ItemJson;
}

export default new ItemStore();