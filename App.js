import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  //read about react native's hooks. This is used to initialize and change the state of the current component.
  // When you use the state in the render function, the screen will be rendered again at every change. To update the state,
  // you must use the setter
  const [count, setCount] = useState(0);

  let add = () => {
    setCount(count+1);
  };
  let subtract = () => {
    setCount(count-1);
  };

  //here is what is rendered
  return (
    <View style={styles.container}>
      <Text>This is your basic counter's value: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => add()}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subtract()}>
        <Text>Subtract</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

  //this is the styling.we will move this in another file later
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#dfac23',
    borderRadius: 10,
  }
});
