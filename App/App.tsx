import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {useFonts} from 'expo-font'


import Row from './components/Row'
import CustomButton from './components/CustomButton'

type AppPropsTypes = {
    currentValue: string

    numberFunc: (value?: number | string) => void
    operationPlus_or_Minus: () => void
    createAction: (value: string) => void
    operationClean: () => void
    operationEqual: () => void
}

const App: React.FC<AppPropsTypes> = ({currentValue, numberFunc, operationPlus_or_Minus, createAction,
                                          operationClean, operationEqual}) => {

    const loaded = useFonts({
        VarelaRoundRegular: require('./assets/fonts/VarelaRound-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <SafeAreaView>
                <View style={styles.bc}>
                    <Text style={currentValue.length > 10 ? styles.valueSmall
                        : currentValue.length > 20 ? styles.valueVerySmall : styles.value}>{currentValue}</Text>
                </View>

                <Row>
                    <CustomButton text={'1'} onPress={() => numberFunc(1)} typeButton={'square'}/>
                    <CustomButton text={'2'} onPress={() => numberFunc(2)} typeButton={'square'}/>
                    <CustomButton text={'3'} onPress={() => numberFunc(3)} typeButton={'square'}/>
                </Row>

                <Row>
                    <CustomButton text={'4'} onPress={() => numberFunc(4)} typeButton={'square'}/>
                    <CustomButton text={'5'} onPress={() => numberFunc(5)} typeButton={'square'}/>
                    <CustomButton text={'6'} onPress={() => numberFunc(6)} typeButton={'square'}/>
                </Row>

                <Row>
                    <CustomButton text={'7'} onPress={() => numberFunc(7)} typeButton={'square'}/>
                    <CustomButton text={'8'} onPress={() => numberFunc(8)} typeButton={'square'}/>
                    <CustomButton text={'9'} onPress={() => numberFunc(9)} typeButton={'square'}/>
                </Row>

                <Row>
                    <CustomButton text={'+/-'} onPress={() => operationPlus_or_Minus()} typeButton={'square'}/>
                    <CustomButton text={'0'} onPress={() => numberFunc(0)} typeButton={'square'}/>
                    <CustomButton text={'.'} onPress={() => numberFunc('.')} typeButton={'square'}/>
                </Row>

                <Row>
                    <CustomButton text={'/'} onPress={() => createAction('/')} typeButton={'circle'}/>
                    <CustomButton text={'-'} onPress={() => createAction('-')} typeButton={'circle'}/>
                    <CustomButton text={'+'} onPress={() => createAction('+')} typeButton={'circle'}/>
                    <CustomButton text={'x'} onPress={() => createAction('x')} typeButton={'circle'}/>
                </Row>

                <Row>
                    <CustomButton text={'C'} onPress={() => operationClean()} typeButton={'big'}/>
                    <CustomButton text={'='} onPress={() => operationEqual()} typeButton={'big'}/>
                </Row>

            </SafeAreaView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'flex-end',
        margin: 0,
        padding: 0
    },
    value: {
        color: '#eee',
        fontSize: 50,
        textAlign: 'right',
        paddingRight: 25,
        paddingLeft: 15,
        fontFamily: 'Roboto',
        paddingBottom: 30,
        paddingTop: 30

    },
    valueSmall: {
        color: '#eee',
        fontSize: 40,
        textAlign: 'right',
        paddingRight: 25,
        paddingLeft: 15,
        fontFamily: 'Roboto',
        paddingBottom: 30,
        paddingTop: 30

    },
    valueVerySmall: {
        color: '#eee',
        fontSize: 30,
        textAlign: 'right',
        paddingRight: 25,
        paddingLeft: 15,
        fontFamily: 'Roboto',
        paddingBottom: 30,
        paddingTop: 30

    },
    bc: {
        marginBottom: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#00E676'
    }
});

export default App