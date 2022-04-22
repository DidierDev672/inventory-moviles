import axios from 'axios'

export default {
    CreateAuthBAsic({uid,name_full,number_identification,phone,email,password}){
        return axios.post('http://localhost:3001/api/auth', {
            uid: uid,
            name_full: name_full,
            number_identification: number_identification,
            phone: phone,
            email: email,
            password: password
        })
    },

    GetAuthAll(){
        return axios.get('http://localhost:3001/api/auth')
    },

    GetProductAll(){
        return axios.get('http://localhost:3001/api/products')
    },

    PostProduct({uid,code_product,name_product, actually_exist,description_product}){
            return axios.post('http://localhost:3001/api/products',{
            uid: uid,
            code_product: code_product,
            name_product: name_product,
            actually_exist: actually_exist,
            description_product: description_product
        })
    },

    UpdateProduct({id, name_product,actually_exist,description_product}){
            return axios.put(`http://localhost:3001/api/products/${id}`, {
                name_product: name_product,
                actually_exist: actually_exist,
                description_product: description_product
            })
    },

    DeleteProduct({id}){
        return axios.delete(`http://localhost:3001/api/products/${id}`)
    },

    getMovementAll(){
        return axios.get('http://localhost:3001/api/movement')
    },

    PostMovement({uid,code_product,name_product,movement,date_movement,quantity_entrance,quantity_exit,price_buy,price_sale}){
        console.log(code_product)
        return axios.post('http://localhost:3001/api/movement',{
            uid:uid,
            code_product:code_product,
            name_product:name_product,
            movement:movement,
            date_movement:date_movement,
            quantity_entrance:quantity_entrance,
            quantity_exit: quantity_exit,
            price_buy: price_buy,
            price_sale: price_sale
        })
    },

    EditMovement({ id, name_product, quantity_entrance, quantity_exit, price_buy, price_sale, movement }){
        return axios.put(`http://localhost:3001/api/movement/${id}`,{
            name_product:name_product,
            quantity_entrance: quantity_entrance,
            quantity_exit: quantity_exit,
            price_buy: price_buy,
            price_sale: price_sale,
            movement: movement
        })
    },

    DeleteMovementProduct({id}){
        return axios.delete(`http://localhost:3001/api/movement/${id}`)
    }
}