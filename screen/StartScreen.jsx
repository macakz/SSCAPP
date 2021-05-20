import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, TextInput, } from 'react-native';
import { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
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
});

function StartScreen ({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const signOutUser = () => {
        auth().signOut()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView>
                <Text>Hello World</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="National Health Index"
                            style={styles.userInputContainer}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="nationalHealthIndex"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.nationalHealthIndex && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Picker
                            onValueChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        >
                            <Picker.Item label="Mr" value="Mr" />
                            <Picker.Item label="Mrs" value="Mrs" />
                            <Picker.Item label="Miss" value="Miss" />
                            <Picker.Item label="Ms" value="Ms" />
                        </Picker>

                    )}
                    name="Title"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.tite && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="First Name"
                            style={styles.userInputContainer}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.firstName && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Last Name"
                            style={styles.userInputContainer}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="lastName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.firstName && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Preferred Name"
                            style={styles.userInputContainer}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="preferredName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.preferredName && <Text>This is required.</Text>}
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView >
    );
}



export default StartScreen
