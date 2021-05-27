import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { isFirebaseAppExisted, initializeFirebase, auth } from './firebase'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import WelcomeScreen from './screen/WelcomeScreen'

const AppStack = createStackNavigator()

export default function App () {
  if (!isFirebaseAppExisted()) {
    initializeFirebase()
  }

  const [appState, setAppState] = useState({
    isAuthenticated: false,
  })

  const { isAuthenticated } = appState

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAppState({
          isAuthenticated: true,
        })
      }
    })
  })
  return (
    < SafeAreaProvider >
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppStack.Navigator>
          {!isAuthenticated &&
            (
              <>
                <AppStack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{
                    title: 'Login',
                    headerShown: true,
                  }}
                />
              </>
            )}
          {isAuthenticated &&
            (
              <>
                <AppStack.Screen
                  name="Welcome"
                  component={WelcomeScreen}
                  options={{
                    title: 'Welcome',
                    headerShown: false,
                  }}
                />
                <AppStack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{
                    title: 'Register',
                    headerShown: true,
                  }}
                />
              </>
            )}
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
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
