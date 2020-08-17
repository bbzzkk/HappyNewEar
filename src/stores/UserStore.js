import { action, observable } from "mobx";

export default class UserStore {
    constructor(root) {
    this.root = root;
    }

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
}
