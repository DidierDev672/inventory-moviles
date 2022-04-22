<template>
  <div class="container py-3">
        <div class="card">
            <h3>Mi Producto: <strong> {{ name_product }} </strong></h3>
           <div class="container">
               <column-movement v-for="(list, index) in ListMovement" :key="index"
                :code_product="list.code_product" :name_product="list.name_product"
                :movement="list.movement" :quantity_entrance="list.quantity_entrance"
                :quantity_exit="list.quantity_exit" :price_buy="list.price_buy"
                :price_sale="list.price_sale" :id="id"
                />
           </div>
        </div>
  </div>
</template>

<script>
import ColumnMovement from './ColumnMovement.vue'
import { mapGetters } from "vuex"

export default {
    name: 'edit-movement',
    props:{
        id: String,
        name_product: String,
    },

    components:{
        ColumnMovement
    },

    computed:{
        ...mapGetters('movement',[
            'getListByMovement'
        ]),

        ListMovement(){
            return this.getListByMovement(this.id)
        }
    }
}
</script>