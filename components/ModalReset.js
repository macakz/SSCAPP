//tools
import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'


export default ModalReset = props => {
    const {
        show = false,
        color = "#eda488",
        backgroundColor = "transparent",
        dimLights = 0.8,
        loadingMessage = "",
        navigation = ''
    } = props;

    const styles = StyleSheet.create({
        button: {
            width: 100,
            alignSelf: 'center',
            padding: 10,
            margin: 10,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 10,
            color: '#eda488',
            fontSize: 20,
        },

    })

    return (
        <Modal transparent={true} animationType='fade' visible={show}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `rgba(0,0,0,${dimLights})`
                }}
            >
                <View
                    style={{
                        padding: 13,
                        backgroundColor: `${backgroundColor}`,
                        borderRadius: 13
                    }}
                >
                    <Text style={{ fontSize: 20, color: `${color}`}}>{loadingMessage}</Text>
                    <TouchableOpacity onPress={() => { navigation.replace('Welcome') }}>
                        <Text style={styles.button}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};