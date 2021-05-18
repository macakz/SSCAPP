import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function LoginScreen ({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text>
                    hello world
                </Text>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}



export default LoginScreen
