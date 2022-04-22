<template>
    <div class="container py-3">
        <div class="card">
            <h4>Mi Producto: <strong> {{ name_product  }} </strong></h4>
            <column-product v-for="(list, index) in ListProduct" :key="index"
                :code_product="list.code_product" :name_product="name_product"
                :actually_exist="list.actually_exist" :description_product="list.description_product"
                :id="id"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ColumnProduct from './ColumnProduct.vue'

    export default {
        name: 'edit-product',
        props:{
            id: String,
            name_product: String
        },

        components:{
            ColumnProduct
        },

        computed:{
            ...mapGetters('product',[
                'getListByProduct'
            ]),

            ListProduct(){
                return this.getListByProduct(this.id)
            }
        }
    }
</script>