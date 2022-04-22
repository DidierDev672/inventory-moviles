import {  db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

export default {
   async getAllFirestore(){
       const docs = await getDocs(collection(db, "product"))
       const obj = {}
       docs.forEach((doc) => {
        obj[doc.id] = doc.data()
       })
       console.log(obj);
       return obj
       /* onSnapshot(collection(db, "product"), (querySnapshot) => {
           querySnapshot.forEach((doc) => {
               console.log(doc.data())
           })
       }) */
    }
}