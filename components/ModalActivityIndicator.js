import React from 'react'
import { View, Text, ActivityIndicator, Modal, } from 'react-native'


export default ModalActivityIndicator = props => {
    const {
        show = false,
        color = "#eda488",
        backgroundColor = "#f9f1f1",
        dimLights = 0.6,
        loadingMessage = "Submitting"
    } = props;
    return (
        <Modal transparent={true} animationType="none" visible={show}>
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
                    <ActivityIndicator animating={show} color={color} size="large" />
                    <Text style={{ color: `${color}` }}>{loadingMessage}</Text>
                </View>
            </View>
        </Modal>
    );
};