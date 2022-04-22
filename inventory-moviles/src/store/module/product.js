import API from '../../Api-Axios'
// import APIFirebase from '../../api'
import * as types from '../types-mutations'

// add loader
const state = () => ({
    fetchinData: false,
    error: null,
    product: []
})

// state is now a object tree to avoid nested arrays 📖
const getters = {
    getListByProduct: (state) => (id) => {
        return Object.values(state.product)
        .filter((element) => element.id === id )
    }
}

// refactor: mongoDB 🌵 calls as api backend
const actions = {
    getProductAll({commit}){
        commit(types.FETCH_PRODUCT_REQUEST)
        API.GetProductAll()
        .then((result) => commit(types.FETCH_PRODUCT_SUCCESS, { product: result.data}))
        .catch((error) => commit(types.FETCH_PRODUCT_FAILURE, { error }))
    //    APIFirebase.getAllFirestore()
    //    .then((result) => commit(types.FETCH_PRODUCT_SUCCESS, { product: result }))
    //    .catch((error) => commit(types.FETCH_PRODUCT_FAILURE, { error }))
    },

    SaveProduct({commit}, {uid,code_product,name_product,actually_exist,description_product}){
        commit(types.FETCH_PRODUCT_REQUEST)
        API.PostProduct({uid,code_product,name_product,actually_exist,description_product})
        .then((result) => commit(types.ADD_PRODUCT, { product: result.data }))
        .catch((error) => commit(types.FETCH_PRODUCT_FAILURE, {error}))
    },

    updateProduct({commit}, { id, name_product, actually_exist, description_product }){
        commit(types.FETCH_PRODUCT_REQUEST)

        API.UpdateProduct({ id, name_product, actually_exist, description_product })
    },

    deleteProduct({commit}, {id}){
        commit(types.FETCH_PRODUCT_REQUEST)

        API.DeleteProduct({id})
        commit('DeleteProductItems', { id })
    },
}

// get data from mongoDb 🌵 to vuex
const mutations = {
    [types.FETCH_PRODUCT_REQUEST](state){
        state.fetchinData = true
        state.error = null
    },

    [types.FETCH_PRODUCT_SUCCESS](state, { product }){
        state.fetchinData = false
        state.error = null
        state.product = { ...product }
    },

    [types.FETCH_PRODUCT_FAILURE](state, { error }){
        state.fetchinData = false
        state.error = error
    },

    [types.ADD_PRODUCT](state, { product }){
        state.product = {...product }
    },

    DeleteProductItems(state, {id}){
        let ObjectProduct = Object.values(state.product)
        let IndexItems = ObjectProduct.findIndex((element) => element.id == id)
        ObjectProduct.splice(IndexItems,1)
        state.product = [ ...ObjectProduct ]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}