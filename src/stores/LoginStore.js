import { action } from "mobx";

export default class LoginStore {
  constructor(root) {
    this.root = root;
  }
  @action reset = () => {
    this.root.login.email = '';
    this.root.login.password = '';
  };
}
