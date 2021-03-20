import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MoreScreen from './MoreScreen';

export interface AppProps { }

export default class MoreContainer extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return <MoreScreen />;
    }
}
