import { action, observable } from "mobx";

export default class LoginStore {
  constructor(root) {
    this.root = root;
  }
  
  @observable email= ''
  @observable password= ''
  
  @action
  changeLoginForm = (name, value) =>{
    this[name] = value
  }

  @action login = () =>{
    this.root.login.email = "";
    this.root.login.password = "";
  }
}
