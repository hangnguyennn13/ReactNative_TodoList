import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ActivateScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Activate Screen</Text>
      </View>
    );
  }
  
}

ActivateScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
