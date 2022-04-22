import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import setting from './setting'

const firebaseApp = initializeApp(setting)
export const auth = getAuth()
export const db = getFirestore(firebaseApp)

export default firebaseApp