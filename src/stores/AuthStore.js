import { action, observable } from "mobx";

// import { persist } from 'mobx-persist';

import { auth, signInWithGoogle, createUserProfileDocument } from "../firebase/firebase.utils";

export default class AuthStore {
  constructor(root) {
    this.root = root;
  }
  
  @observable signInEmail= ''
  @observable signInPassword= ''

  @observable displayName = ''
  @observable signUpEmail= ''
  @observable signUpPassword= ''
  @observable confirmedPassword= ''

  
  @observable currentUser = null;
  @observable unsubscribeFromAuth = null;

  @action
  setCurrentUser = (user) => {
      this.currentUser = user;
  };

  @action
  setUnsubscribeFromAuth = (unsubscribe) => {
      this.unsubscribeFromAuth = unsubscribe;
  };

  @action
  changeSignInForm = (name, value) =>{
    this[name] = value
  }

  @action signIn = async (email, password) =>{
    try{
      await auth.signInWithEmailAndPassword(email, password)
    }catch(error){
      console.error(error);
    } finally{
       this.root.authStore.signInEmail = "";
       this.root.authStore.signInPassword = "";
    } 
  }

  @action signInWithGoogle = () =>{
    signInWithGoogle()
  }

  @action signOut = () =>{
    auth.signOut()
    this.currentUser = null
  }

  @action signUp = async () =>{
    const {
      signUpEmail,
      signUpPassword,
      confirmedPassword,
      displayName,
    }= this
    if(signUpPassword !== confirmedPassword){
      alert('입력하신 비밀번호가 서로 다릅니다.')
      return
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(signUpEmail, signUpPassword);
      
      await createUserProfileDocument(user, {displayName})
      
      await alert("가입이 완료되었습니다!");
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.confirmedPassword = "";
      this.displayName = "";
    }catch(error){
      alert(error.message)
    }
  }
}
