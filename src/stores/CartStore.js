import { observable, computed, action } from 'mobx';

import UserData from "../data/UserData";

class CartStore {
  @observable user = UserData[2];
  @observable items = this.user.items.sort(function (a, b) {
    return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
  });
  @observable allChecked = true;

  @computed
  get _user() {
    return this.user ? { ...this.user } : {};
  }

  @computed
  get _items() {
    return this.items ? this.items.slice() : [];
  }

  @computed
  get _allChecked() {
    
    return this.allChecked;
  }

  @computed
  get _itemCount() {

    let cnt = 0;

    this.items.map((item) => {
      if (item.checked === true) {
        cnt += item.count;
      }
      return item;
    });

    return cnt;
  }

  @computed
  get _totalPrice() {
    let total = 0;

    this.items.map((item) => {
      if (item.checked === true) {
        total += item.count * item.price;
      }
      return item;
    });

    return total;
  }

  @action
  handleAllCheck = (e) => {
    this.allChecked = e.target.checked;
    this.items = this.items.map((item) => {
      item.checked = e.target.checked;
      return item;
    });
  };

  @action
  handleCheck = (e) => {
    let isAllChecked = true;

    this.items = this.items.map((item) => {
      if (item.name === e.target.name) {
        item.checked = e.target.checked;
      }
      if (item.checked === false) {
        isAllChecked = false;
      }
      return item;
    });

    this.allChecked = isAllChecked;
  };

  @action
  deleteSelected = () => {
    this.items = this.items.filter((item) => item.checked !== true);
  };

  @action
  deleteItem = (itemName) => {
    this.items = this.items.filter((item) => item.name !== itemName);
  };

  @action
  addClick = (itemName) => {
    this.items = this.items.map((item) => {
      if (item.name === itemName) {
        item.count++;
      }
      return item;
    });
  };

  @action
  subClick = (itemName) => {
    this.items = this.items.map((item) => {
      if (item.name === itemName) {
        if (item.count !== 1) {
          item.count--;
        }
      }
      return item;
    });
  };

  @action
  put = (listName, item) => {};

  @action
  take = () => {};

  @action
  addItem=(item)=>{
    this.items = [...this.items, item]
  }
}

export default CartStore;