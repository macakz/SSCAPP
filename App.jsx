import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TouchableOpacity, Text, View, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { isFirebaseAppExisted, initializeFirebase, auth } from './firebase'
import { Provider as PaperProvider } from 'react-native-paper';

import { AntDesign, Feather } from '@expo/vector-icons';
//Screens
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import WelcomeScreen from './screen/WelcomeScreen'
import AdminScreen from './screen/AdminScreen'

//Style
import styles from './appStyle.js';

const AppStack = createStackNavigator()

export default function App () {
  if (!isFirebaseAppExisted()) {
    initializeFirebase()
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <AppStack.Navigator>
            <>
              <AppStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Login',
                  headerShown: false,
                }}
              />
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
                    <TouchableOpacity onPress={() => navigation.replace('Welcome')}>
                      <View>
                        <Text style={styles.headerSubText}>
                          <AntDesign name="retweet" size={20} color="black" />
                          {' '}Reset 
                        </Text>
                      </View>
                    </TouchableOpacity>

                  ),
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.replace('Admin')}>
                      <Text style={styles.headerSubText}>
                        <Feather name="settings" size={20} color="black" />
                        {' '}Admin
                      </Text>
                    </TouchableOpacity>

                  ),
                })}
              />
              <AppStack.Screen
                name="Admin"
                component={AdminScreen}
                options={({ navigation }) => ({
                  title: 'Register',
                  headerShown: true,
                  headerLeft: () => (
                    <Button
                      onPress={() => navigation.replace('Welcome')}
                      title="Register"
                      color="#000"
                    />
                  ),
                })}
              />
            </>
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider >
  );
}

