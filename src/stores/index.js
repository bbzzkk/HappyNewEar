import PreviewStore from "./PreviewStore";
import LoginStore from "./LoginStore";
import CartStore from "./CartStore";

export default class RootStore {
  constructor() {
    this.preview = new PreviewStore(this);
    this.login = new LoginStore(this);
    this.cart = new CartStore(this);    
  }
}