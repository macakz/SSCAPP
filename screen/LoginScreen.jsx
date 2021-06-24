//tools
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//components
import { loginAdmin } from './accountHelper'

//firebase
import { auth } from '../firebase';

//Style
import styles from './loginScreenStyle.js';


function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const loadingHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }

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
                <TouchableOpacity style={styles.button} onPressIn={loadingHandler} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View>
                    <ActivityIndicator color="#eda488" size="large" animating={loading} />

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}



export default LoginScreen
