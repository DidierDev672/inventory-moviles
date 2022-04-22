import * as types from '../types-mutations'
import API from '../../Api-Axios'

// add loader
const state = () => ({
    fetchingData:  false,
    error: null,
    movement: []
})

// state is now a object tree to avoid nested arrays 📖
const getters = {
    getListByMovement: (state) => (id) => {
        return Object.values(state.movement)
        .filter((element) => element.id === id)
    }
}

// refactor: mongoDB 🌵 calls as api backend
const actions = {
    getMovementAll({commit}){
        commit(types.FETCH_MOVEMENT_REQUEST)

        API.getMovementAll()
        .then((result) => commit(types.FETCH_MOVEMENT_SUCCESS, { movement: result.data }))
        .catch((error) => commit(types.FETCH_MOVEMENT_FAILURE, { error }))
    },

    postMovement({commit}, {uid,code_product,name_product,movement,date_movement,quantity_entrance,quantity_exit,price_buy,price_sale}){
        commit(types.FETCH_MOVEMENT_REQUEST)

        API.PostMovement({uid,code_product,name_product,movement,date_movement,quantity_entrance,quantity_exit,price_buy,price_sale})
        .then((result) => commit(types.ADD_MOVEMENT, { movement: result.data }))
        .catch((error) => commit(types.FETCH_MOVEMENT_FAILURE, { error }))
    },

    updateMovement({commit}, { id,name_product, quantity_entrance, quantity_exit, price_buy, price_sale,movement }){
        commit(types.FETCH_MOVEMENT_REQUEST)
        API.EditMovement({id,name_product, quantity_entrance, quantity_exit, price_buy, price_sale, movement})
        .then((result) => commit(types.FETCH_MOVEMENT_SUCCESS, { movement: result.data }))
        .catch((error) => commit(types.FETCH_MOVEMENT_FAILURE, { error }))
    },

    deleteMovementProduct({commit}, {id}){
        commit(types.FETCH_MOVEMENT_REQUEST)

        API.DeleteMovementProduct({id})
        commit('deleteMovementItems', {id})
    }
}

// get data from mongoDb 🌵 to vuex
const mutations = {
    [types.FETCH_MOVEMENT_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },

    [types.FETCH_MOVEMENT_SUCCESS](state, { movement }){
        state.fetchingData = false
        state.error = null
        state.movement = [ ...movement ]
    },

    [types.FETCH_MOVEMENT_FAILURE](state, { error }){
        state.fetchingData = false
        state.error = error
    },

    [types.ADD_MOVEMENT](state, { movement}){
        state.movement = [ ...movement ]
    },

    deleteMovementItems(state, {id}){
        let ObjectMovement = Object.values(state.movement)
        let IndexItems = ObjectMovement.findIndex((element) => element.id === id)
        ObjectMovement.splice(IndexItems, 1)
        state.movement = [ ...ObjectMovement ]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}