import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component {
  render() {
    return (
      <View>
        <DrawerItems {...this.props} />
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {
            this.props.navigation.navigate('WelcomeScreen');
            firebase.auth().signOut();
          }}>
          <Text style={styles.buttonText}> Logout </Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: '100%',
    height: 50,
    marginLeft: 10,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
