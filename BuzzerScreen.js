import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import SooundButton from '../components/SoundButton';


export default class HomeScreen extends React.Component {
   

  render() {
    return (
      <View>
      <AppHeader/>
      <SooundButton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}