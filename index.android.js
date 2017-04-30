// index.android.js place code here for ** Android **


//Import library to help create a component
import React from 'react'
import { AppRegistry, Text, View} from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'


//Create component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    )
}

//Render to device
AppRegistry.registerComponent('albums', ()=>App)