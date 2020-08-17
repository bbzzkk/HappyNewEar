import { observable, computed, action } from 'mobx';
import User from '../User';

class CartStore {
    @observable user = User[0];
    @observable item = this.user.item;

    @computed
    get _user() {
        return this.user ? { ...this.user } : {};
    }

    @computed
    get _item() {
        return this.item ? this.item.slice() : [];
    }

    @computed
    get _caseList() {
        return this.caseList ? { ...this.caseList } : {};
    }

    @computed
    get _keyringList() {
        return this.keyringList ? { ...this.keyringList } : {};
    }

    @computed
    get _stickerList() {
        return this.stickerList ? { ...this.stickerList } : {};
    }

    @computed
    get _allSelectCheckBox() {
        return this.allSelectCheckBox;
    }

    @computed
    get _caseCheckBox() {
        return this.caseCheckBox;
    }

    @computed
    get _keyringCheckBox() {
        return this.keyringCheckBox;
    }

    @computed
    get _stickerCheckBox() {
        return this.stickerCheckBox;
    }

    @action
    allSelect = (e) => {   
        this.allSelectCheckBox = e.target.checked;
        this.cartList = this.cartList.map(list => {
            list.checked = e.target.checked;
            list.item = list.item.map(item => {
                item.checked = e.target.checked;
                return item;
            });
            return list;
        });
    }

    @action
    cartListSelect = (e) => {
        // const idx = this.cartList.findIndex(obj => obj.listName === e.target.name);
        // this.caseListCheckBox = e.target.checked;
        // this.cartList[idx].checked = e.target.checked;
        // this.caseList = this.cartList[idx];

        if (e.target.checked === false) {
            this.allSelectCheckBox = false;
        }

        this.cartList = this.cartList.map(list => {
            if (list.listName === e.target.name) {
                list.checked = e.target.checked;
                list.item = list.item.map(item => {
                    item.checked = e.target.checked;
                    return item;
                });
            }
            return list;
        });
    }

    @action
    itemSelect = (e) => {
        // const listIdx = this.cartList.findIndex(obj => obj.listName === listName);
        // const itemIdx = this.cartList[listIdx].item.findIndex(obj => obj.id === item.id);
        // this.cartList[listIdx].item[itemIdx].checked = true;

        this.cartList = this.cartList.map(list => {
            if (e.target.checked === false) {
                this.allSelectCheckBox = false;
            }

            list.item = list.item.map(item => {
                if (item.name === e.target.name)
                    item.checked = e.target.checked;
                return item;
            });
            return list;
        });
    }

    @action
    deleteSelected = () => {

    }

    @action
    put = (listName, item) => {

    }

    @action
    take = () => {

    }
}

export default new CartStore();