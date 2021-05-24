import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, SafeAreaView, Switch, ScrollView, View, Button, StyleSheet, Text, TouchableOpacity, Image, TextInput, } from 'react-native'
import { auth } from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import { Picker } from '@react-native-picker/picker'
import { CheckBox } from 'react-native-elements'
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
});

function StartScreen ({ navigation }) {
    const currentDate = new Date();
    const timestamp = currentDate.getTime()
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => firebase.database().ref("Patient" + timestamp).set(data)


    console.log(timestamp)

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={15} style={styles.container}>
                <SafeAreaView>
                    <Text>National Health Index:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='numeric'
                                placeholder="National Health Index"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="nationalHealthIndex"
                        rules={{ required: true, maxLength: 10 }}
                        defaultValue=""
                    />
                    {errors.nationalHealthIndex && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            >
                                <Picker.Item label=" " value=" " />
                                <Picker.Item label="Mr" value="Mr" />
                                <Picker.Item label="Mrs" value="Mrs" />
                                <Picker.Item label="Miss" value="Miss" />
                                <Picker.Item label="Ms" value="Ms" />
                            </Picker>

                        )}
                        name="title"
                        rules={{ required: true, minLength: 2 }}
                        defaultValue=""
                    />
                    {errors.title && <Text>This is required.</Text>}
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
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Address"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="address"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.address && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='numeric'
                                placeholder="Phone Number"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="phone"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.phone && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput

                                placeholder="E-mail"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.email && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput

                                placeholder="GP Name"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="gpName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.gpName && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="GP Suburb"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="gpSuburb"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.gpSuburb && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                multiline={true}
                                placeholder="Current Medications"
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="gpSuburb"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.currentMedication && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                multiline={true}
                                placeholder="Drug Allergies"
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="Drug Allergies"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.drugAllergies && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Insurance Company"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="insuranceCompany"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.insuranceCompany && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <Text>Are you a NZ resident?</Text>
                                <Switch
                                    value={value}
                                    onBlur={onBlur}
                                    trackColor={{ false: '#767577', true: 'green' }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={value => onChange(value)}
                                />
                            </>
                        )}
                        name="nzResident"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <Text>
                                    Clinical photographs are often taken as part of your medical record.
                                    On occasion these are used for educational, teaching and publication purposes.
                                    In this case your personal details are kept confidential and you will not be identified in any way.
                                    Identifiable photographs e.g. of your face or distinctive marks such as tattoos will only be used
                                    with your express written consent.
                                </Text>
                                <Text>
                                    I have read and understood the above statement
                                </Text>
                                <Switch
                                    value={value}
                                    onBlur={onBlur}
                                    trackColor={{ false: '#767577', true: 'green' }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={value => onChange(value)}
                                />
                            </>
                        )}
                        name="consent"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.consent && <Text>This is required.</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </SafeAreaView>

            </KeyboardAvoidingView >
        </ScrollView>
    );
}



export default StartScreen
