<template >
   <div class="container-inventory p-6">
      <form class="card">
         <template v-if="!uid">
         <div class="container">
            <div class="py-3">
               <span
               >Debe iniciar session o registrarse, interactuar con la plataforma
               <strong>Y registrar productos...</strong>
               </span>
               <div class="flex-btn-uid py-3">
                     <router-link to="/login" class="btn-login">Iniciar Session</router-link>
                     <router-link to="/register-user" class="btn-register">Registrar usuario</router-link>
               </div>
            </div>
         </div>
         </template>
         <template v-else>
         <strong>Registro de producto</strong>
         <div class="py-3">
            <div class="grid-form">
               <div class="form-inventory">
               <label>Codigo producto</label>
               <input
                  type="text"
                  class="text-inventory"
                  v-model="code_product"
                  placeholder="Codigo producto"
               />
               </div>
               <div class="form-inventory">
               <label>Nombre producto</label>
               <input
                  type="text"
                  class="text-inventory"
                  v-model="name_product"
                  placeholder="Nombre producto"
               />
               </div>
               <div class="form-inventory">
               <label>Extencia actual</label>
               <input
                  type="text"
                  class="text-inventory"
                  v-model="actually_exists"
                  placeholder="Extencia actual"
               />
               </div>
               <div class="form-inventory">
               <label>Descripcion producto</label>
               <textarea
                  class="text-inventory"
                  style="width: 100%"
                  v-model="description_product"
                  placeholder="Descripcion del producto"
               ></textarea>
               </div>
            </div>
            <div class="p-4 items-center">
               <button
               type="button"
               class="btn-product"
               style="width: 7rem"
               @click="Save()"
               >
               Guardar
               </button>
            </div>
         </div>
         </template>
      </form>
   </div>
</template>

<script>
import { mapActions } from "vuex";
import MininsUid from "../global/index";

export default {
   name: "app-product",
   data() {
      return {
         uid: MininsUid.Uid,
         code_product: "",
         name_product: "",
         actually_exists: "",
         description_product: "",
      };
   },

   methods: {
      ...mapActions("product", ["SaveProduct", "getProductAll"]),

      Save() {
         if (
         this.code_product != "" &&
         this.name_product != "" &&
         this.actually_exists != "" &&
         this.description_product != ""
         ) {
         this.SaveProduct({
            uid: this.uid,
            code_product: this.code_product,
            name_product: this.name_product,
            actually_exist: this.actually_exists,
            description_product: this.description_product,
         });
         this.code_product = "";
         this.name_product = "";
         this.actually_exists = "";
         this.description_product = "";
         } else {
         alert("Debe llenar todos los campos");
         }
      },
   },

   created() {
      this.getProductAll();
   },
};
</script>

<style scoped>
.flex-btn-uid{
   display: flex;
   flex-direction: row;
   flex-wrap:nowrap;
   grid-gap: 10px;
   justify-content: center;
}
</style>