import React, {  useLayoutEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import { auth } from '../firebase'
import styles from './adminScreenStyle.js';



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