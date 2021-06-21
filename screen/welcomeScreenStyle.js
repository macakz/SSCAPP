import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        margin: 50,
    },
    userInputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 300,

    },
    userInputContaineFocus: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        padding: 10,
        width: 300,
    },
    userInputContainerLarge: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 300,
        height: 200,
        textAlignVertical: "top"
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

    },
    errorText: {
        color: "red"
    },
});
