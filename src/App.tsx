import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Switch from 'react-native-draggable-switch'

class App extends React.Component {
  state = {
    isSwitchOn: false,
  }

  render() {
    const { isSwitchOn } = this.state
    return (
      <View style={styles.container}>
        <Text>Happy Hacking!</Text>
        <Switch
          width={50}
          height={30}
          value={this.state.isSwitchOn}
          onValueChange={isSwitchOn => this.setState({ isSwitchOn })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
