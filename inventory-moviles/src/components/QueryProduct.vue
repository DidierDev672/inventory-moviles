<template>
    <div class="container py-3">
        <div class="card">
            <table class="border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th class="border border-slate-300">Codeigo producto</th>
                        <th class="border border-slate-300">Nombre producto</th>
                        <th class="border border-slate-300">Existencia actual</th>
                        <th class="border border-slate-300">Descripcion producto</th>
                        <th class="border border-slate-300">Editar</th>
                        <th class="border border-slate-300">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <body-product v-for="(list, index) in product" :key="index"
                        :code_product="list.code_product" :name_product="list.name_product"
                        :actually_exist="list.actually_exist" :description_product="list.description_product"
                        :id="list.id"
                    />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from "vuex"
import BodyProduct from "./BodyProduct.vue"

export default {
    name: 'query-product',

    components:{
        BodyProduct
    },

    computed:mapState ({
        product:  state => state.product.product
    }),

    methods: {
        ...mapActions('product',[
            'getProductAll'
        ]),
    },

    created() {
        this.getProductAll()
    },
}
</script>