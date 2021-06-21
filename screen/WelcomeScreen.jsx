import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, Image,  } from 'react-native'
import styles from './welcomeScreenStyle.js';

function WelcomeScreen ({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default WelcomeScreen