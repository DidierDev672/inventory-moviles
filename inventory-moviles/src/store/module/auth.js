import * as types from '../types-mutations'
import  { auth }  from '../../api/firebase'
import API from '../../Api-Axios'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import router from '../../route'

// add loader

const state = () => ({
    fetchingData: false,
    error: null,
    auth: []
})

// state is now a object nested arrays
const getters = {
    getAuthUid: (state) => (uid) => {
        return Object.values(state.auth)
        .filter((element) => element.uid === uid)
    }
}

// refactor: firebase 🔥 calls as api client
const actions = {
    // Create user to Firebase
    CreateUser({commit},{name_full,number_identification,phone,email,password}){
         createUserWithEmailAndPassword(auth,email,password)
         .then((userCredential) => {
             const user = userCredential.user
             const uid = user.uid
             commit(types.FETCH_AUTH_REQUEST)
             API.CreateAuthBAsic({uid,name_full,number_identification,phone,email,password})
             .then((result) => commit(types.FETCH_AUTH_SUCCESS, { auth: result.data }))
             .catch((error) => commit(types.FETCH_AUTH_FAILURE, { error }))
         })
         .catch((error) => {
             console.error(error)
         })
    },

    signAuth({commit}, {email,password}){
        signInWithEmailAndPassword(auth, email,password)
        .then(() => {
            router.push({ path: '/' })
        })
        .catch((error) => {
            console.error(error)
        })
    },
    getAuthAll({commit}){
        commit(types.FETCH_AUTH_REQUEST)

        API.GetAuthAll()
        .then((result) => { commit(types.FETCH_AUTH_SUCCESS, { auth: result.data }) })
        .catch((error) => commit(types.FETCH_AUTH_FAILURE, { error }))
    }
}

// get data from firebase 🔥 to vuex
const mutations = {
    // Fetch the auth created by firebase
    [types.FETCH_AUTH_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },

    [types.FETCH_AUTH_SUCCESS] (state, { auth }){
        state.fetchingData = false
        state.error = null
        state.auth = [ ...auth ]
    },

    [types.FETCH_AUTH_FAILURE](state, { error }){
        state.fetchingData = false
        state.error = error
    },

    [types.ADD_USER](state, { user }){
        state.auth = [ ...user ]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}