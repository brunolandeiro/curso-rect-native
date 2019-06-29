import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        <Simples texto='Flexível!!' />
        <ParImpar numero={33} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize:20
  }
})

