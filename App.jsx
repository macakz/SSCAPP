import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LoginScreen from './screen/LoginScreen'
import StartScreen from './screen/StartScreen'
import { isFirebaseAppExisted, initializeFirebase, auth } from './firebase'


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
    auth().onAuthStateChanged(() => {
      setAppState({
        isAuthenticated: true,
      })
    })
  })
  console.log(isAuthenticated)
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
              <AppStack.Screen
                name="Start"
                component={StartScreen}
                options={{
                  title: 'Start',
                  headerShown: true,
                }}
              />
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