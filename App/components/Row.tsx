import React from 'react'
import {StyleSheet, View} from 'react-native'

// @ts-ignore
const Row = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25
    }
});

export default Row