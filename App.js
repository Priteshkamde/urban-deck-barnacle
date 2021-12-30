import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("prit")
  const [age, setAge] = useState(24)


  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor='pink'
      />

      <Text> Enter Name </Text>
      <TextInput style={styles.inputStyle}
        placeholder='John Doe'
        onChangeText={(val) => setName(val)}
      />


      <Text> Enter Age </Text>
      <TextInput style={styles.inputStyle}
        keyboardType='numeric'
        placeholder='9999'
        onChangeText={(val) => setAge(val)}
      />

      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name} | {age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
  }
});
