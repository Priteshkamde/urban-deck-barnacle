import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';

function addTodo({ addTodoItem }) {

    const [text, setText] = useState('');

    const onAddTodo = (val) => {
        setText(val);
    }

    return (
        <View>

            <TextInput 
            style={styles.inputTodoStyle}
                placeholder='new todo..'
                onChangeText={onAddTodo}
            />
            
            <Button style={styles.addTodoButtonStyle} onPress={() => addTodoItem(text)} title='add' color='#d9b3e6'/>

        </View>
    )
}

export default addTodo

const styles = StyleSheet.create({
    inputTodoStyle: {
        // borderBottomColor: 'black',
        // borderWidth: 1,
        // borderColor: 'white',
        // padding: 10,
        // margin: 10,
        // width: 200,
        marginBottom: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
      },
      addTodoButtonStyle : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      }
});

