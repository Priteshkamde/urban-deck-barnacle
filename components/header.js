import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.todoTitleStyle}>My TO-DOs</Text>
        </View>
    )
}

export default header


const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#d9b3e6',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    todoTitleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});