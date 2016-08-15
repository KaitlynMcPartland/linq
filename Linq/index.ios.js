import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator, 
  TouchableHighlight
} from 'react-native';


import Launch from './components/Launch';
import Main from './components/Main';
import LinqUp from './components/LinqUp';
import Contact from './components/Contact';
import Profile from './components/Profile';

import {Scene, Router} from 'react-native-router-flux';


class Linq extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Launch" component={Launch} initial={true}/>
          <Scene key="Main" component={Main} title="Main"/>
          <Scene key="LinqUp" component={LinqUp} title="LinqUp"/>
          <Scene key="Contact" component={Contact} title="Contact"/>
          <Scene key="Profile" component={Profile} title="Profile"/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('Linq', () => Linq);
