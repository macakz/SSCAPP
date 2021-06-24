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
    buttonContainer: {
        width: 500,
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#eda488',
        backgroundColor: '#eda488',
        margin: 10,
        padding: 10,
        width: 180,
    },
    buttonText: {

    },
    consentText: {
        padding: 10,
        width: 500,
        textAlign: 'justify',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#eda488',

    },
    consentContainer: {
        marginTop: 10,
        padding: 10,
        width: 500,
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#eda488',

    },
    understood: {
        fontSize: 15,
        paddingTop: 10,
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
    switchResident: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        width: 500,
    },
    nzValue: {
        fontSize: 18,

    },
    switchConsent: {
        padding: 10,
        alignItems: 'center',
    },

});
