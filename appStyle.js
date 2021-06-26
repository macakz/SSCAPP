import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerSubText: {
        alignContent: 'center',
        fontSize: 20,
        padding: 10,

    },
    confirmButton: {
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
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.8)'
    },

    subContainer: {
        padding: 13,
        backgroundColor: 'transparent',
        borderRadius: 13
    },
    message: {
        fontSize: 20,
        color: '#eda488'
    },
});
