<template>
    <div class="container-fluid">
        <div class="card">
            <h1><strong>Consultar movimientos de productos</strong></h1>
            <table class="border-collapse border border-slate-400 py-2">
                <thead>
                    <tr>
                        <th class="border border-slate-300">Codigo producto</th>
                        <th class="border border-slate-300">Nombre producto</th>
                        <th class="border border-slate-300">Movimiento</th>
                        <th class="border border-slate-300">Fecha movimiento</th>
                        <th class="border border-slate-300">Cantidad entrada</th>
                        <th class="border border-slate-300">Cantidad salida</th>
                        <th class="border border-slate-300">Precio compra</th>
                        <th class="border border-slate-300">Precio venta</th>
                        <th class="border border-slate-300">Total</th>
                        <th class="border border-slate-300">Editar</th>
                        <th class="border border-slate-300">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <body-movement v-for="(list, index) in listMovement" :key="index"
                    :id="list.id" :code_product="list.code_product" :name_product="list.name_product"
                    :movement="list.movement" :date_movement="list.date_movement" :quantity_entrance="list.quantity_entrance" :quantity_exit="list.quantity_exit"
                    :price_buy="list.price_buy" :price_sale="list.price_sale"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BodyMovement from './BodyMovement.vue'

export default {
    name: 'query-movement',
    components:{
        BodyMovement
    },

    computed:mapState({
        listMovement: state => state.movement.movement
    }),

    methods: {
        ...mapActions('movement',[
            'getMovementAll'
        ])
    },
}
</script>

<style scoped>
.card{
    width: 100%;
    align-items: center;
}

.container-vue{
    align-items: center;
}
</style>