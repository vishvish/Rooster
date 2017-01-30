import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Tile, Title, Caption, Button, Divider, Icon, NavigationBar, Image} from '@shoutem/ui';
import App from './app/App';

export default class Rooster extends Component {
  render() {
    return (
      <View styleName="v-center">
      <NavigationBar
      leftComponent={<Icon name="sidebar" />}
      centerComponent={<Title>TITLE</Title>}
      />
      <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('Rooster', () => Rooster);
