import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => (
  <View style={styles.container}>
    <Text>Happy Hacking!</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
