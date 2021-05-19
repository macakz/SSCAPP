import { auth } from '../firebase'

export function loginAdmin ({ email, password }) {
    return auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.log (error)
        })
}