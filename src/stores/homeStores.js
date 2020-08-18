import { observable, action, computed } from 'mobx';
import ItemJson from '../ItemJson';


class HomeStore {
    //관리해야하는 state객체 @observable 선언 및 초기화
    @observable 
    ItemJson = ItemJson;

    @observable
    SelectCategory = ItemJson;

    // @computed 
    // get getItemJson() {
    //     return this.ItemJson ? this.ItemJson.slice : [];
    // }

    // @computed
    // get getSelectCategory() {
    //     return this.SelectCategory ? this.SelectCategory : [];
    // }


    @action
    CategoryClick(SelectCategoryId) {
        this.SelectCategory = ItemJson;
        let temp = this.SelectCategory.find((Json) => Json.id === SelectCategoryId);
        this.SelectCategory = temp;
    }    
}

export default new HomeStore();