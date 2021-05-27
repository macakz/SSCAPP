import React, { useState, useLayoutEffect } from 'react'
import firebase from 'firebase'
import { KeyboardAvoidingView, SafeAreaView, Switch, ScrollView, View, Button, StyleSheet, Text, TouchableOpacity, Image, TextInput, } from 'react-native'

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
    userInputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 300,

    },
    userInputContaineFocus: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        padding: 10,
        width: 300,
    },
    userInputContainerLarge: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 300,
        height: 200,
        textAlignVertical: "top"
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
    errorText: {
        color: "red"
    },

});

function WelcomeScreen ({ navigation }) {
    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                <SafeAreaView>
                    <Text>Hello World</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Register')}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default WelcomeScreen