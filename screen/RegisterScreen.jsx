import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, SafeAreaView, View, Switch, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, } from 'react-native'
import firebase from 'firebase'
import { useForm, Controller } from "react-hook-form"
import { Picker } from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import 'firebase/firestore'
import styles from './registerScreenStyle.js';


function RegisterScreen ({ navigation }) {
    const selectionColor = '#eda488'
    const [loading, setLoading] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm();

    const db = firebase.firestore()
    const onSubmit = data =>
        db.collection("Patient")
            .add({ data, createdAt: firebase.firestore.Timestamp.now() })
            .then(() => {
                setLoading(false)
            })

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Register',
        })
    })

    return (
        <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text style={styles.instruction}>
                        Please fill in your details below, anything marked <Text style={styles.required}>*</Text> is required.
                    </Text>
                    <Text style={styles.controllerTitle}>
                        National Health Index:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                placeholder="#"
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="nationalHealthIndex"
                        defaultValue=""
                    />
                    <Text style={styles.controllerTitle}>
                        Title<Text style={styles.required}>*</Text>:
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
                    {errors.title && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>First Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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
                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Last Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Preferred Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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
                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Date of Birth:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask
                                selectionColor={selectionColor}
                                keyboardType="numeric"
                                style={styles.userInputContainer}
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                onChangeText={value => onChange(value)}
                                onBlur={onBlur}
                                value={value}
                                placeholder='DD/MM/YYY'
                            />
                        )}
                        name="dateOfBirth"
                        rules={{ required: true, minLength: 8, pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/ }}
                        defaultValue=""
                    />
                    {errors.dateOfBirth?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.dateOfBirth?.type === "minLength" && <Text style={styles.errorText}>Please enter a valid date of birth</Text>}
                    {errors.dateOfBirth?.type === "pattern" && <Text style={styles.errorText}>Please enter a valid date of birth</Text>}

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Address:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                placeholder="1 Smith Street, Auckland, 1070, NZ"
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

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Phone Number:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Email:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                autoCapitalize="none"
                                selectionColor={selectionColor}
                                keyboardType='email-address'
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

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>GP Name:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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
                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>GP Suburb:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
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
                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Current Medications (Please include any supplements):
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                multiline={true}
                                placeholder="Please type none if this does not apply"
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="currentMedication"
                        rules={{ required: true, minLength: 4, }}
                        defaultValue=""
                    />
                    {errors.currentMedication?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.currentMedication?.type === "minLength" && <Text style={styles.errorText}>Please state your current medications, or type none.</Text>}

                    <Text style={styles.controllerTitle}>
                        <Text style={styles.required}>*</Text>Drug Allergies (Name of medication and description of reaction):
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                multiline={true}
                                placeholder="Please type none if this does not apply"
                                style={styles.userInputContainerLarge}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="drugAllergies"
                        rules={{ required: true, minLength: 4, }}
                        defaultValue=""
                    />
                    {errors.drugAllergies?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    {errors.drugAllergies?.type === "minLength" && <Text style={styles.errorText}>Please state your drug allergies, or type none.</Text>}

                    <Text style={styles.controllerTitle}>
                        Insurance Company:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="insuranceCompany"
                        defaultValue=""
                    />
                    <Text style={styles.controllerTitle}>
                        Membership Number:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                selectionColor={selectionColor}
                                keyboardType='numeric'
                                style={styles.userInputContainer}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="membershipNumber"
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <Text>
                                    <Text style={styles.required}>*</Text>Are you a NZ resident?
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
                                <Text style={styles.consentText}>
                                    Clinical photographs are often taken as part of your medical record.
                                    On occasion these are used for educational, teaching and publication purposes.
                                    In this case your personal details are kept confidential and you will not be identified in any way.
                                    Identifiable photographs e.g. of your face or distinctive marks such as tattoos will only be used
                                    with your express written consent.
                                </Text>
                                <Text style={styles.consentTextAgree}>
                                    <Text style={styles.required}>*</Text>I have read and understood the above statement
                                </Text>
                                <Switch
                                    value={value}
                                    onBlur={onBlur}
                                    trackColor={{ true: 'green', false: '#767577' }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={value => onChange(value)}
                                />
                            </>
                        )}
                        name="consent"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.consent?.type === "required" && <Text style={styles.errorText}>This is required.</Text>}
                    <TouchableOpacity style={styles.button} onPressIn={() => { setLoading(true) }} onPress={handleSubmit(onSubmit)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <ActivityIndicator color="green" size="large" animating={loading} />
                </View>
                </KeyboardAwareScrollView>
    );
}



export default RegisterScreen
