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
})

function AdminScreen ({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Administration',
        })
    })
    return (
        <SafeAreaView  style={styles.container}>
            <Text>testing 123456789</Text>
        </SafeAreaView>
        
    )
}

export default AdminScreen