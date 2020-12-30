import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    // alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  text: {
    color: '#2c3e50',
    fontSize: 30,
    fontWeight: 'bold'
  },
  yellowView: {
    flex:1,
    backgroundColor: 'yellow'
  },
  blueView: {
    flex:2,
    backgroundColor: 'blue'
  }
});
