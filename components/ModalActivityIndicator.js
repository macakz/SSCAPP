import React from 'react'
import { View, Text, ActivityIndicator, Modal, } from 'react-native'


export default ModalActivityIndicator = props => {
    const {
        show = false,
        color = "#eda488",
        backgroundColor = "transparent",
        dimLights = 0.8,
        loadingMessage = ""
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
                    <Text style={{ fontSize: 20, color: `${color}` }}>{loadingMessage}</Text>
                </View>
            </View>
        </Modal>
    );
};