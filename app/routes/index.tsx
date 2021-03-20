import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeContainer from '../screen/Home/HomeContainer';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View } from 'react-native';
import modules from '../modules';
import Icons from 'react-native-vector-icons/Feather';
import { Battambang } from '../../functions/customFont';
import MoreContainer from '../screen/More/MoreContainer';



enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const APP_TAB = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: any
          let label = ''
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'More') {
            iconName = focused ? 'menu' : 'menu';
          } 
          if (route.name === 'Home') {
            return (
              <View style={styles.group}>
                <Icons name={iconName} size={24} color={color} />
                <Text style={[styles.text, { color: !focused ? modules.PRIMARY_TAB : modules.PRIMARY, }]}>Home</Text>
              </View>
            )
          } else if (route.name === 'More') {
            return (
              <View style={styles.group}>
                <Icons name={iconName} size={24} color={color} />
                <Text style={[styles.text, { color: !focused ? modules.PRIMARY_TAB : modules.PRIMARY, }]}>More</Text>
              </View>
            )
          } 
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: modules.PRIMARY,
        inactiveTintColor: modules.PRIMARY_TAB,
        style: {
          backgroundColor: Platform.OS == 'ios' ? 'transparent' : modules.WHITE,
        },
      }}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="More" component={MoreContainer} />
    </Tab.Navigator>
  );
};

const Tab_Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Home" component={APP_TAB} />
    </Stack.Navigator>
  );
};


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Tab_Stack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  img: {
    width: 23,
    height: 23,
  },
  group: {
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    ...Battambang,
    paddingTop: modules.SPACE,
  },
});