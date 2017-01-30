/**
* Created by vish on 29/01/2017.
  */
  import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight
} from 'react-native';

import {Tile, Title, Caption, Button, TextInput, Divider, Icon, NavigationBar, Image} from '@shoutem/ui';
import Container from '../components/Container';
// import Button from '../components/Button';
import Label from '../components/Label';

import Utilities from '../utils/Utilities'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'vishvish',
      password: 'vishvish',
      token: ''
    }
  }

  async login() {
    var myRequest = new Request('http://192.168.99.100:32000/org/app/token', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        grant_type: 'password',
      })
    });

    //console.log(myRequest);

    try {
      let response = await fetch(myRequest);

      let responseJson = await response.json();

      //console.log(responseJson);
      this.setState({ token: responseJson.access_token });
      console.log(responseJson.access_token);

      return responseJson.access_token;
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <Container>
      <Tile styleName="text-centric">
      <Title styleName="sm-gutter-bottom">The Rooster</Title>
      <Caption>© Vish Vishvanath 2015-2017</Caption>
      </Tile>
      <Divider styleName="section-header" />
      <TextInput placeholder={'Username'} onChangeText={(username) => this.setState({username})} autoCorrect={false} autoCapitalize={'none'} value={'vishvish'}  />
      <TextInput placeholder={'Password'} secureTextEntry onChangeText={( password ) => this.setState({password})} value={'vishvish'} />
      <Button styleName="full-width" onPress={this.login.bind(this)}>
      <Icon name="ic_user_profile"/>
      <Text>LOGIN</Text>
      </Button>
      </Container>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 100
  }
});
