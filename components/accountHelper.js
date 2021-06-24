//firebase
import { auth } from '../firebase'

export function loginAdmin ({ email, password }) {
    return auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            if (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert("Please enter a valid email address")
                        break
                    case 'auth/wrong-password':
                        alert('Wrong password, please try again')
                        break
                    case 'auth/user-not-found':
                        alert('This account is not registered')
                        break
                    case 'auth/too-many-requests':
                        alert('We have disabled all requests from this device due to unusual activity. Please try again later.')
                        break
                    default:
                        alert('Error has occured, please try again.')
                }
            }
        })
}