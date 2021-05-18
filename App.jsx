import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LoginScreen from './screen/LoginScreen'
export default function App () {
  const AppStack = createStackNavigator()

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerShown: true,
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
