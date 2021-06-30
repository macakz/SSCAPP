//tools
import React, { useState, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, } from 'react-native'

//firebase
import { auth } from '../firebase'

//style
import styles from './adminScreenStyle.js';



function AdminScreen ({ navigation }) {
    //states
    const [showReset, setShowReset] = useState(false)

    //handlers
    const signOut = () => {
        auth().signOut()
            .then(
                () => navigation.replace('Login')
            )
            .finally(() => setShowReset(false)
            )
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Administration',
        })
    })
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setShowReset(true)}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType='fade' visible={showReset}>
                <View style={styles.mainContainer}>
                    <View style={styles.subContainer}>
                        <Text style={styles.message}>Are you sure you wish sign out ?</Text>
                        <TouchableOpacity onPress={() => signOut()}>
                            <Text style={styles.confirmButton}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShowReset(false) }}>
                            <Text style={styles.confirmButton}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AdminScreen