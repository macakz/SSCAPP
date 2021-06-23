import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        paddingLeft: 100,
    },
    userInputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 500,
    },
    userInputContainerLarge: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        width: 500,
        height: 200,
        textAlignVertical: "top"
    },
    pickerStyle: {
        width: 520,
        fontSize: 15,
        height: 100,
        marginLeft: -8,

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
    consentText: {
        padding: 10,
        width: 500,
        textAlign: 'justify',
    },
    consentTextAgree: {
        padding: 10,
        textAlign: 'center',
    },
    errorText: {
        color: "red"
    },
    required: {
        color: "red",
    },
    controllerTitle: {
    paddingLeft: 3,
    paddingBottom: 10,
    paddingTop: 10,
    },
    instruction: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center",
    },
    switch: {
        padding: 10,
    }

});
