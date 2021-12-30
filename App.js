import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'john wick', id: '1' },
    { name: 'tom cruise', id: '2' },
    { name: 'ironman', id: '3' },
    { name: 'batman', id: '4' },
    { name: 'spiderman', id: '5' },
    { name: 'superman', id: '6' },
  ]);


  const pressHandlerOpacity = (id) => {
    console.log(id);
    setPeople((prevState_people) => {
      return prevState_people.filter(person => person.id != id)
    }
    )
  }

  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor='yellow'
      />

      {/* FlatList has better performance, Loads as per usage */}

      <FlatList
        numColumns={2}
        idExtractor={(item) => item.id}
        data={people}
        renderItem={
          ({ item }) => (
            <TouchableOpacity onPress={() => pressHandlerOpacity(item.id)}>
              <Text style={styles.eachPeopleStyle}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  }
});
