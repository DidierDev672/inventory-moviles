<template>
    <tr>
        <td class="border border-slate-300">{{ code_product }}</td>
        <td class="border border-slate-300">{{ name_product }}</td>
        <td class="border border-slate-300">{{ movement }}</td>
        <td class="border border-slate-300 p-3"> <span class="bg-red-600 text-slate-100 rounded-lg p-2">{{ date_movement }}</span></td>
        <td class="border border-slate-300">{{ quantity_entrance }}</td>
        <td class="border border-slate-300">{{ quantity_exit }}</td>
        <td class="border border-slate-300">{{ currency(price_buy) }}</td>
        <td class="border border-slate-300">{{ currency(price_sale) }}</td>
        <td class="border border-slate-300">{{ currency(get_total)}}</td>
        <td class="border border-slate-300"><router-link :to="{name: 'EditMovement', params: {id, name_product}}" class="bg-blue-500 text-white rounded-lg p-2">Editar</router-link></td>
        <td class="border border-slate-300"><button class="bg-red-500 text-white rounded-lg p-2" @click="Delete()">Borrar</button></td>
    </tr>
</template>

<script>
import { currency } from '../currency'
import { mapActions } from 'vuex'

export default {
    name: 'body-movement',
    props:{
        id: String,
        code_product: String,
        name_product: String,
        movement: String,
        date_movement: String,
        quantity_entrance: String,
        quantity_exit: String,
        price_buy: String,
        price_sale: String
    },

    setup(){
        return{
            currency
        }
    },

    computed:{
            get_total(){
                return this.quantity_entrance * this.price_buy - this.quantity_exit
            }
    },

    methods: {
        ...mapActions('movement',[
            'deleteMovementProduct'
        ]),

        Delete(){
            this.deleteMovementProduct({ id: this.id })
        }
    }
}
</script>