// Import Libraries for making component
import React from 'react'
import { Text } from 'react-native'


//Make Component
const Header = () => {
    const { textStyle } = styles
    return (
        <Text style={textStyle}>Albums Header!</Text>
        )
}

const styles = {
    textStyle: {
        fontSize: 30
    }
}

//Make Component available to other parts of the application
export default Header