//firbase
import * as firebase from 'firebase'
import 'firebase/auth'
import { firebaseConfig } from '../config/keys'

//checking
export function isFirebaseAppExisted () {
	return firebase.default.apps.length > 0
}
export function initializeFirebase () {
	firebase.default.initializeApp(firebaseConfig)
}

//auth
export const { auth } = firebase.default

//storage


