import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { loginAdmin } from './accountHelper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        margin: 50,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 300,

    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#eda488',
        backgroundColor: '#eda488',
        padding: 9,
        margin: 4,
        width: 180,
    },
    buttonText: {

    },
});

function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn () {
        loginAdmin({ email, password })
    }
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
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <SafeAreaView>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="E-mail"
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
        </KeyboardAvoidingView>
    );
}



export default LoginScreen
