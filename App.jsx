import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { isFirebaseAppExisted, initializeFirebase, auth } from './firebase'
import { Provider as PaperProvider } from 'react-native-paper';

//Screens
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
      <PaperProvider>
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
                    options={({ navigation }) => ({
                      title: 'Register',
                      headerShown: true,
                      headerRight: () => (
                        <Button
                          onPress={() => navigation.replace('Welcome')}
                          title="Reset Form"
                          color="#000"
                        />
                      ),
                      headerLeft: () => (
                        <Button
                          onPress={() => navigation.replace('Admin')}
                          title="Admin"
                          color="#000"
                        />
                      ),
                    })}
                  />
                </>
              )}
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider >
  );
}

