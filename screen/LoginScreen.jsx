//tools
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, TextInput, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//components
import { loginAdmin } from '../components/accountHelper'
import ModalActivityIndicator from '../components/ModalActivityIndicator.js'

//firebase
import { auth } from '../firebase';

//Style
import styles from './loginScreenStyle.js';


function LoginScreen ({ navigation }) {
    //states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    //handlers
    const loadingHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    function signIn () {
        loginAdmin({ email, password })
        loadingHandler()
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
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <SafeAreaView style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <ModalActivityIndicator show={loading} loadingMessage="Logging in" />

            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}



export default LoginScreen
