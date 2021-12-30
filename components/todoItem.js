
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onToDoItemPressHandler }) {
    return (
        <TouchableOpacity onPress={() => onToDoItemPressHandler(item.key)}>
            <Text style={styles.todoItemStyle}> {item.text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItemStyle: {
        padding: 10,
        marginTop: 10,
        borderColor: '#FFF',

        // alignItems: 'center',
        // justifyContent: 'center',
    },

});
