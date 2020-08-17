import { observable, computed, action } from 'mobx';

import User from '../data/User';

export default class CartStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = User[1];
  @observable cartList = [];

  @computed get _user() {
    return this.user ? { ...this.user } : {};
  }

  @computed get _cartList() {
    return this.user.cartList ? this.user.cartList.slice() : [];
  }
}
