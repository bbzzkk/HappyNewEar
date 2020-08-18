import React, { Component } from 'react'
import PreViewContainer from '../containers/PreViewContainer'
import { Provider } from 'mobx-react'
import HomeStore from '../stores/homeStores'

class Homepage extends Component{
    render(){
        return(
        <Provider HomeStore= {HomeStore}>
                <PreViewContainer />
          </Provider>
            
        )
    }
}

export default Homepage