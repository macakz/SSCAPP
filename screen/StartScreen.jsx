import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { auth } from '../firebase'

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

function StartScreen ({ navigation }) {

    const signOutUser = () => {
        auth().signOut()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView>
                <Text>Hello World</Text>
                <TouchableOpacity style={styles.button} onPress={() => { signOutUser }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView >
    );
}



export default StartScreen
