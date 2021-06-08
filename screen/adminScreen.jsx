import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, SafeAreaView, Switch, Button, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, } from 'react-native'
import { auth } from '../firebase'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

    }
})

function AdminScreen ({ navigation }) {
    const signOut = () => {
        auth().signOut()
            .then(
                () => navigation.replace('Login')
            )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Administration',
        })
    })


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AdminScreen