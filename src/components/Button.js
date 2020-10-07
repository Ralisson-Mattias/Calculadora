import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'


export default props => {

    const stylesButton = [styles.button]

    if(props.double) stylesButton.push(styles.buttonDouble)

    if(props.triple) stylesButton.push(styles.buttonTriple)

    if(props.operation) stylesButton.push(styles.operationButton)

    function labelName() {
        props.onClick(props.label)
    }

    return (
        <>
            <TouchableHighlight onPress={labelName}>
                <Text style={stylesButton}>{props.label}</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#BBB'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})