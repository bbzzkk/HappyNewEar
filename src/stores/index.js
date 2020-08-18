import PreviewStore from "./PreviewStore";
import AuthStore from "./AuthStore";
import CartStore from "./CartStore";

export default class RootStore {
  constructor() {
    this.previewStore = new PreviewStore(this);
    this.authStore = new AuthStore(this);
    this.cartStore = new CartStore(this);   
  }
}