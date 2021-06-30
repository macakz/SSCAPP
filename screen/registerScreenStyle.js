import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        alignItems: 'center'
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
        marginTop: 20,
        marginBottom: 50,
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
        padding: 10,
        color: "red"
    },
    required: {
        color: "red",
    },
    controllerTitle: {
        width: 500,
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
        alignItems: 'center',
    },
    nzValue: {
        fontSize: 18,

    },
    switchConsent: {
        padding: 10,
        alignItems: 'center',
    },
    signatureContainer: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#eda488',
        padding: 10,
        width: 500,
    },
    optional: {
        fontStyle: 'italic',
    }
});
