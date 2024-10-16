import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name ={"HOME"} component={HomeScreen}/>
            <Stack.Screen name ={"LOGIN"} component={LoginScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
    // <div>hello</div>
  )
}

export default App

const styles = StyleSheet.create({})