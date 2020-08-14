import { action, observable} from "mobx";
import ItemJson from "../ItemJson";

class PreviewStore {
    //관리해야하는 state객체 @observable 선언 및 초기화 

    @observable 
    itemjson = ItemJson;

    @observable
    caselist = ItemJson[0].items;

    @observable
    keyringlist = ItemJson[1].items;

    @observable
    stickerlist = ItemJson[2].items;

    
    @action
    selectCategory(){
        
    }    
}

export default new PreviewStore();