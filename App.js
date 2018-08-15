import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super( props )
    this.state = {
      bgcolor: 'red'
    }
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let bgcolor = this.state.bgcolor
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: "100%", height: "90%", backgroundColor: 'powderblue'}} />
        <View style={{width: "100%", height: "10%", backgroundColor: 'skyblue'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: "50%", height: "100%", backgroundColor: 'orange', padding:20}}>
              <Button
                onPress={()=>{

                }}
                title="Register"
                color="#841584"
                // accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{width: "50%", height: "100%", backgroundColor: 'yellow', padding:20}}>
              <Button
                onPress={() => {

                }}
                title="Login"
                color="#841584"
                // accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
