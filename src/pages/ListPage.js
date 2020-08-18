import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import { Provider } from 'mobx-react';
import HomeStore from '../stores/homeStores'
class ListPage extends Component{
    render(){
        return(
            <Provider HomeStore = {HomeStore}>
            <ListContainer />
            </Provider>
        )
    }
}

export default ListPage; 