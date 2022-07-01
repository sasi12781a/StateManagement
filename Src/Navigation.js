import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppWraper from './AppWraper';
import NxtScreen from './NxtScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={AppWraper} />
          <Stack.Screen name="Nxt" component={NxtScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Navigation;