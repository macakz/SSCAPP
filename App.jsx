//tools
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, TouchableOpacity, Text, View, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';

//firebase
import { isFirebaseAppExisted, initializeFirebase } from './firebase'

//Screens
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import WelcomeScreen from './screen/WelcomeScreen'
import AdminScreen from './screen/AdminScreen'

//Style
import styles from './appStyle.js';
import { AntDesign, Feather } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';


const AppStack = createStackNavigator()
const transitionConfig = {
  animation: 'spring',
  config: {
    stiffness: 150,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default function App () {
  const [appIsReady, setAppisReady] = useState(false)
  const [showReset, setShowReset] = useState(false)

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
                  transitionSpec: {
                    open: transitionConfig,
                    close: transitionConfig,
                  },
                }}
              />
              <AppStack.Screen
                name="Register"
                component={RegisterScreen}
                options={({ navigation }) => ({
                  title: 'Register',
                  transitionSpec: {
                    open: transitionConfig,
                    close: transitionConfig,
                  },
                  headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'normal'
                  },
                  headerShown: true,
                  headerRight: () => (
                    <TouchableOpacity onPress={() => setShowReset(true)}>
                      <View>
                        <Text style={styles.headerSubText}>
                          <AntDesign name="retweet" size={20} color="black" />
                          {' '}Reset
                        </Text>
                        <Modal transparent={true} animationType='fade' visible={showReset}>
                          <View
                            style={{
                              flex: 1,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: 'rgba(0,0,0,0.8)'
                            }}
                          >
                            <View
                              style={{
                                padding: 13,
                                backgroundColor: 'transparent',
                                borderRadius: 13
                              }}
                            >
                              <Text style={{ fontSize: 20, color: '#eda488' }}>Are you sure you wish to reset the form ?</Text>
                              <TouchableOpacity onPress={() => { setShowReset(false) + navigation.replace('Welcome') }}>
                                <Text style={styles.button}>Yes</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => { setShowReset(false) }}>
                                <Text style={styles.button}>No</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Modal>
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

