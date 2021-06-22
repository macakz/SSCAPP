import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { auth } from '../firebase';
import { loginAdmin } from './accountHelper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//Style
import styles from './loginScreenStyle.js';


function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn () {
        loginAdmin({ email, password })
    }

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Welcome')
            }
        })
        return unsubscribe
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Skin Specialist Centre Login',
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: '#000',
            },
        })
    }, [navigation])

    return (
        <KeyboardAwareScrollView>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <SafeAreaView>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}



export default LoginScreen
