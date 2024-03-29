import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: 'black',
        textAlign: 'center',
        //borderWidth: 1,
        borderColor: '#888',
        color: 'white'

    },
    operationButton: {
        color: '#fa8231',
        backgroundColor: 'black',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) *2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) *3,
        color: '#fa8231',
        backgroundColor: 'black',
    },
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}