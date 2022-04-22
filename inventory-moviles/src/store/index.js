import { createStore, createLogger } from 'vuex'
import auth from './module/auth'
import product from './module/product'
import movement from './module/movement'

const debug = process.env.NODE_ENV !== 'production'

export default createStore ({
    modules:{
        auth,
        product,
        movement
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})