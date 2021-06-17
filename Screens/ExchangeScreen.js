import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import MyHeader from '../components/MyHeader'; 
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      itemDescription: '',
      userID: firebase.auth().currentUser.email,
    };
  }

  createUniqueId() {
    return Math.random().toString(30).substring(8);
  }

  addItem = (itemName, itemDescription) => {
    var randomRequestId = this.createUniqueId();
    db.collection('items').add({
      Item_Name: itemName,
      Item_Description: itemDescription,
      User_ID: this.state.userID,
      Exchange_ID: randomRequestId,
    });

    this.setState({
      itemName: '',
      itemDescription: '',
    });

    return Alert.alert('Item Added Successfully!');
  };

  render() {
    return (
      <View
        style={{ backgroundColor: '#c4ffe4', width: '100%', height: '100%' }}>
        <MyHeader title="ADD ITEM" navigation={this.props.navigation}/> 
        <KeyboardAvoidingView style={styles.container}>
          <TextInput
            style={styles.addtextInput}
            placeholder={'Item Name'}
            onChangeText={(text) => {
              this.setState({
                itemName: text,
              });
            }}
            value={this.state.itemName}
          />

          <TextInput
            style={styles.reasontextInput}
            placeholder={'Item Description'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                itemDescription: text,
              });
            }}
            value={this.state.itemDescription}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              this.addItem(this.state.itemName, this.state.itemDescription);
            }}>
            <Text style={styles.addButtonText}> ADD ITEM </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4ffe4',
    width: '100%',
    height: '100%',
  },

  addtextInput: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },

  reasontextInput: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },

  addButton: {
    borderRadius: 10,
    backgroundColor: 'red',
    borderBottomWidth: 5,
    borderBottomColor: 'yellow',
    marginTop: 30,
    width: '50%', 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
});
