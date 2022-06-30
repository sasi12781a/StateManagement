import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppWraper from './AppWraper';

const NxtScreen=()=>{
    return(
        <View style={{alignItems:"center",justifyContent:'center'}}>
            <Text>
                Hello
            </Text>
        </View>
    )
}
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