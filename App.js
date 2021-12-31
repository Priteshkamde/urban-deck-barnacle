import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'jogging', key: '2' },
    { text: 'swimming', key: '3' },
    { text: 'work', key: '4' },
  ]);


  const onToDoItemPressHandler = (key) => {
    console.log(key);
    setTodos((previousStateOfTodos) => {
      return previousStateOfTodos.filter(todo => todo.key != key)
    });
  }

  const addTodoItem = (text) => {

    if (text.length > 3) {
      setTodos((previousStateOfTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...previousStateOfTodos
        ]
      })
    } else {
      Alert.alert('oops !', 'Todos must be 3 Chars long',
        [
          { text: 'Understood', onPress: () => console.log('alert closed') }
        ])
    }


  }

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#d9b3e6' />
        <Header />
        <View style={styles.content}>
          <AddTodo addTodoItem={addTodoItem} />
          <View style={styles.listStyle}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} onToDoItemPressHandler={onToDoItemPressHandler} />
              )
              }
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 20,
  },
  listStyle: {
    marginTop: 50,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    marginTop: 50,
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputStyle: {
    borderBottomColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    margin: 10,
    width: 200,
  },
  eachPeopleStyle: {
    marginTop: 24,
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
