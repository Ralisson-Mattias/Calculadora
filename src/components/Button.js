import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'


export default props => {
    return (
        <>
            <TouchableHighlight onPress={props.OnCLick}>
                <Text style={styles.button}>{props.label}</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        with: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#BBB'
    }
})