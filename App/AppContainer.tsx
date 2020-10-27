import React, {useState} from 'react'
import App from './App'

const AppContainer = () => {

    let [currentValue, setCurrentValue] = useState('0');
    let [newNumber, setNewNumber] = useState(false);
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);

    const numberFunc = (value?: number | string) => {
        if (newNumber === true) {
            currentValue = '';
            setNewNumber(false)
        }

        if (currentValue === '0') {
            currentValue = '';
            setCurrentValue(`${currentValue}${value}`)
        }
        setCurrentValue(`${currentValue}${value}`)
    };

    const operationClean = () => {
        setCurrentValue('0');
        setOperator(null);
        setPreviousValue(null)
    };

    const operationPlus_or_Minus = () => {
        setCurrentValue(`${parseFloat(currentValue) * -1}`)
    };

    const createAction = (value: string) => {
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue('0')
    };

    const operationEqual = () => {
        const current: number = parseFloat(currentValue);
        const previous: number = parseFloat(previousValue);

        if (operator === '+') {
            setCurrentValue(`${previous + current}`);
            setOperator(null);
            setPreviousValue(null);
            setNewNumber(true)
        }

        if (operator === '-') {
            setCurrentValue(`${previous - current}`);
            setOperator(null);
            setPreviousValue(null);
            setNewNumber(true)
        }

        if (operator === '/') {
            setCurrentValue(`${previous / current}`);
            setOperator(null);
            setPreviousValue(null);
            setNewNumber(true)
        }

        if (operator === 'x') {
            setCurrentValue(`${previous * current}`);
            setOperator(null);
            setPreviousValue(null);
            setNewNumber(true)
        }
    };

    return <App createAction={createAction} currentValue={currentValue} numberFunc={numberFunc} operationClean={operationClean}
        operationEqual={operationEqual} operationPlus_or_Minus={operationPlus_or_Minus} />;
};

export default AppContainer
