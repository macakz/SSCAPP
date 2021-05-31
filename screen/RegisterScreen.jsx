import React, { useState, useLayoutEffect } from 'react'
import { Modal, TouchableHighlight, KeyboardAvoidingView, SafeAreaView, Switch, ScrollView, View, Button, StyleSheet, Text, TouchableOpacity, Image, TextInput, } from 'react-native'
import { auth } from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import { Picker } from '@react-native-picker/picker'

import { TextInputMask } from 'react-native-masked-text'


import 'firebase/firestore'

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
    pickerStyle: {
        width: 300,
        fontSize: 15,
        height: 100,
    },
    datePicker: {
        width: 300,
        fontSize: 15,
        height: 300,
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

function RegisterScreen ({ navigation }) {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayDay = days[today.getDay()]
    const todayDate = today.getDate()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const todayMonth = months[today.getMonth()]
    const todayYear = today.getFullYear()
    const currentDate = `${todayDay} ${todayDate} ${todayMonth} ${todayYear}`
    const currentHour = today.getHours()
    const currentMinutes = today.getMinutes()
    const currentSeconds = today.getSeconds()
    const currentTime = `${currentHour}:${currentMinutes}:${currentSeconds}`


    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const { control, handleSubmit, formState: { errors } } = useForm();
    const db = firebase.firestore()

    const onSubmit = data => db.collection("Patient").add({ data, createdAt: firebase.firestore.Timestamp.now() })

    //firebase realtime database below
    // const onSubmit = data => firebase.database().ref(currentDate).child("Patient:" + currentTime).set(data)

    return (
        <ScrollView >
            <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={15} style={styles.container}>
                <SafeAreaView>
                    <Text>
                        National Health Index:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='numeric'
                                placeholder="#"
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
                    {errors.nationalHealthIndex && <Text style={styles.errorText}>This is required.</Text>}
                    <Text>
                        Title:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                itemStyle={styles.pickerStyle}
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
                    {errors.title?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.title?.type === "minLength" && <Text style={styles.errorText}>Please select a title.</Text>}

                    <Text>
                        First Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="John"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="firstName"
                        rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
                        defaultValue=""
                    />
                    {errors.firstName?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.firstName?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid name.</Text>}
                    <Text>
                        Last Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Smith"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="lastName"
                        rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
                        defaultValue=""
                    />
                    {errors.firstName?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.lastName?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid name.</Text>}

                    <Text>
                        Preferred Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="John"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="preferredName"
                        rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
                        defaultValue=""
                    />
                    {errors.preferredName?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.preferredName?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid name.</Text>}
                    <Text>
                        Date of Birth:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask
                                keyboardType="numeric"
                                style={styles.userInputContainer}
                                type={'datetime'}
                                options={{
                                    format: 'dd/MM/yyyy'
                                }}
                                onChangeText={value => onChange(value)}
                                onBlur={onBlur}
                                value={value}
                                placeholder='DD/MM/YYY'
                            />
                        )}
                        name="dateOfBirth"
                        rules={{ required: true, minLength: 8, pattern: /([1-9][0-9]*)|0/ }}
                        defaultValue=""
                    />
                    {errors.dateOfBirth?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.dateOfBirth?.type === "minLength" && <Text style={styles.errorText}>Please enter a valid date of birth</Text>}
                    {errors.dateOfBirth?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid date of birth</Text>}

                    <Text>
                        Address:
                    </Text>
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
                    {errors.address?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}

                    <Text>
                        Phone Number:
                    </Text>
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
                        rules={{ required: true, pattern: /([1-9][0-9]*)|0/ }}
                        defaultValue=""
                    />
                    {errors.phone?.type === "required" && <Text style={styles.errorText} t>This is required.</Text>}
                    {errors.phone?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid phone number.</Text>}

                    <Text>
                        Email:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="johnsmith@mail.com"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                        defaultValue=""
                    />
                    {errors.email?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.email?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid email.</Text>}

                    <Text>
                        GP Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                
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
                    {errors.gpName?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <Text>
                        GP Suburb:
                    </Text>
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
                    {errors.gpSuburb?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <Text>
                        Current Medications:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                multiline={true}
                                placeholder="Please include any supplements."
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="currentMedication"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.currentMedication?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <Text>
                    Drug Allergies:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                multiline={true}
                                placeholder="Name of medication and description of reaction."
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="drugAllergies"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.drugAllergies?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
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
                    {errors.insuranceCompany?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='numeric'
                                placeholder="Membership Number"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="membershipNumber"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.membershipNumber?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <Text>
                                    Are you a NZ resident?
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
                        name="nzResident"
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
                    {errors.consent?.type === "required" && <Text style={styles.errorText}>Please confirm the above statement.</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </SafeAreaView>

            </KeyboardAvoidingView >
        </ScrollView >
    );
}



export default RegisterScreen
