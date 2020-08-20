import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmtNjdcRcnVRVJS2L4yL96IUpX9P70vVM",
  authDomain: "happynewear-db.firebaseapp.com",
  databaseURL: "https://happynewear-db.firebaseio.com",
  projectId: "happynewear-db",
  storageBucket: "happynewear-db.appspot.com",
  messagingSenderId: "342565248281",
  appId: "1:342565248281:web:37d89261f4126706cff988",
  measurementId: "G-E9FRXJY814",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // 파이어베이스 콘솔 development의 auth
export const firestore = firebase.firestore(); // 파이어베이스 콘솔 developmnet의 DB 사용

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // 구글 계정으로 로그인할 수 있도록 설정 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
