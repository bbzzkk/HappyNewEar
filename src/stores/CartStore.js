import { observable, computed, action } from 'mobx';
import User from '../User';

class CartStore {
    @observable user = User[1];
    @observable cartList = [];

    @computed get _user() {
        return this.user ? { ...this.user } : {};
    }

    @computed get _cartList() {
        return this.user.cartList ? this.user.cartList.slice() : [];
    }
}

export default new CartStore();