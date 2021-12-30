import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'john wick', key: '1' },
    { name: 'tom cruise', key: '2' },
    { name: 'iron man', key: '3' },
    { name: 'batman', key: '4' },
    { name: 'spider man', key: '5' },
    { name: 'batman', key: '6' },
    { name: 'spider man', key: '7' },
    { name: 'spider man', key: '8' },
    { name: 'batman', key: '10' },
    { name: 'spider man', key: '11' },
    { name: 'batman', key: '12' },
    { name: 'spider man', key: '13' },
  ]);

  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor='pink'
      />

      {/* ScrollView */}
      {/* 
      <ScrollView>
        {
          people.map((eachPeople) => {
            return (
              <View key={eachPeople.key}>
                <Text style={styles.eachPeopleStyle}>{eachPeople.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}

      {/* FlatList has better performance, Loads as per usage */}

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={
          ({ item }) => (
            <Text style={styles.eachPeopleStyle}>{item.name}</Text>
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
    marginTop : 10,
  }
});
