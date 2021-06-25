//tools
import React, { useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, } from 'react-native'

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
            <Modal transparent={true} animationType='fade' visible={showReset}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: 'rgba(0,0,0,0.8)'
                    }}
                >
                    <View
                        style={{
                            padding: 13,
                            backgroundColor: 'transparent',
                            borderRadius: 13
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#eda488' }}>Are you sure you wish to reset the form ?</Text>
                        <TouchableOpacity onPress={() => { setShowReset(false) + navigation.replace('Welcome') }}>
                            <Text style={styles.button}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShowReset(false) }}>
                            <Text style={styles.button}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AdminScreen