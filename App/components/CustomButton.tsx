import React from 'react'
import {Dimensions, StyleSheet, Text, TouchableHighlight} from 'react-native'
import {useFonts} from "expo-font";

type CustomButtonTypes = {
    text: string
    typeButton: 'circle' | 'square' | 'big'

    onPress: () => void
}

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 3;
const buttonWidthCircle = screen.width / 4;
const bigButton = screen.width / 2;

const CustomButton:React.FC<CustomButtonTypes> = ({ text, onPress, typeButton }) => {

    const [loaded] = useFonts({
        SyneMono: require('../../assets/fonts/SyneMono-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <TouchableHighlight style={ typeButton === 'circle'
            ? styles.buttonCircle
            : typeButton === 'big'
            ? styles.bigButton
            : styles.button
        } onPress={onPress}>
            <Text style={ typeButton === 'circle'
                ? styles.textCircle
                : typeButton === 'big'
                    ? styles.textBig
                    : styles.text
            }>{text}</Text>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5,
        backgroundColor: '#222',
        borderColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 1,
        height: buttonWidth - 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    buttonCircle: {
        flex: 1,
        margin: 5,
        backgroundColor: '#00BFA5',
        height: buttonWidthCircle - 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonWidthCircle
    },
    bigButton: {
        flex: 1,
        margin: 5,
        backgroundColor: '#222',
        borderColor: '#D500F9',
        borderStyle: 'solid',
        borderWidth: 1,
        height: bigButton - 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 50
    },
    text: {
        fontFamily: 'SyneMono',
        fontSize: 30,
        color: '#eee'
    },
    textCircle: {
        fontFamily: 'SyneMono',
        fontSize: 30,
        color: '#eee'
    },
    textBig: {
        fontFamily: 'SyneMono',
        fontSize: 30,
        color: '#D500F9'
    }
});

export default CustomButton