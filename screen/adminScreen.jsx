//tools
import React, {  useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'

//firebase
import { auth } from '../firebase'

//style
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
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AdminScreen