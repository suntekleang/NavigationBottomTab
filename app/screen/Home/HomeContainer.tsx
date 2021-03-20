import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeScreen from './HomeScreen';

export interface AppProps {}

export default class HomeContainer extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return <HomeScreen />;
  }
}
