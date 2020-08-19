import ItemStore from "./ItemStore";
import AuthStore from "./AuthStore";
import CartStore from "./CartStore";

export default class RootStore {
  constructor() {
    this.itemStore = new ItemStore(this);
    this.authStore = new AuthStore(this);
    this.cartStore = new CartStore(this);   
  }
}