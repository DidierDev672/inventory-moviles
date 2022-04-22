<template>
    <div class="container p-3">
        <div class="grid-form">
            <div class="form-inventory">
                <label>Codigo producto</label>
                <input type="text" class="text-inventory" v-model="code_products" placeholder="Codigo producto" disabled/>
            </div>
            <div class="form-inventory">
                <label>Nombre producto</label>
                <input type="text" class="text-inventory" v-model="name_products" placeholder="Nombre producto" />
            </div>
            <div class="form-inventory">
                <label>Existencia actual</label>
                <input type="text" class="text-inventory" v-model="actually_exists" placeholder="Existencia actual" />
            </div>
            <div class="form-inventory">
                <label>Descripcion producto</label>
                <textarea type="text" class="text-inventory" v-model="description_products" placeholder="Descripcion producto"></textarea>
            </div>
        </div>
        <div class="py-3">
                <button type="button" class="btn-edit" @click="Update()">Editar</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'column-product',
    data(){
        return{
            code_products: this.code_product,
            name_products: this.name_product,
            actually_exists: this.actually_exist,
            description_products: this.description_product,

        }
    },

    props:{
        code_product: String,
        name_product: String,
        actually_exist: String,
        description_product: String,
        id: String
    },

    methods:{
        ...mapActions('product',[
            'updateProduct'
        ]),

        Update(){
            if(this.name_products != "" && this.actually_exists != "" && this.description_products != ""){
                this.updateProduct({
                    id: this.id,
                    name_product: this.name_products,
                    actually_exist: this.actually_exists,
                    description_product: this.description_products
                })
            }else{
                alert('Debe llenar todos los campos!')
            }
        }
    }
}
</script>