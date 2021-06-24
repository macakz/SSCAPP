//tools
import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, } from 'react-native'

//Style
import styles from './welcomeScreenStyle.js';

function WelcomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Register')}>
                    <Text>Register Here</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>

    )
}

export default WelcomeScreen