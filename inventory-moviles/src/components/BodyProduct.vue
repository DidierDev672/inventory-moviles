<template>
        <tr>
          <td class="border border-slate-300">{{ code_product }}</td>
          <td class="border border-slate-300">{{ name_product }}</td>
          <td class="border border-slate-300">{{ actually_exist }}</td>
          <td class="border border-slate-300">{{ description_product }}</td>
          <td class="border border-slate-300"><router-link :to="{name: 'EditProduct', params: {id, name_product}}" class="bg-blue-500 text-white rounded-lg p-2">Editar</router-link></td>
          <td class="border border-slate-300"><button type="button" class="bg-red-500 text-white rounded-lg p-2" @click="Delete()">Borrar</button></td>
      </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'body-product',
    props:{
      id: String,
      code_product: String,
      name_product: String,
      actually_exist: String,
      description_product: String
    },

    methods: {
        ...mapActions('product',[
          'deleteProduct'
        ]),

        Delete(){
          this.deleteProduct({
            id: this.id
          })
        }
    },
}
</script>