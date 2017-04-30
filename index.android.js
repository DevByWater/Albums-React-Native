// index.android.js place code here for ** Android **


//Import library to help create a component
import React from 'react'
import { AppRegistry, Text} from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'


//Create component
const App = () => {
    return (
        <Header headerText={'Albums'} />
        
    )
}

//Render to device
AppRegistry.registerComponent('albums', ()=>App)