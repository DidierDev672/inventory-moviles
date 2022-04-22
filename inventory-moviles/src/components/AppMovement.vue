<template>
  <div class="container-inventory p-6">
    <form class="card">
      <strong>Movientos de productos</strong>
      <div class="grid-form p-3">
        <input
          type="text"
          class="text-inventory"
          v-model="code_product"
          placeholder="Ingresar codigo del producto"
        />
        <input
          type="text"
          class="text-inventory"
          v-model="name_product"
          placeholder="Nonbre del producto"
        />
        <input
          type="text"
          class="text-inventory"
          v-model="quantity_entrance"
          placeholder="Cantidad Entreda "
        />
        <input
          type="text"
          class="text-inventory"
          v-model="quantity_exit"
          placeholder="Cantidad Salida"
        />
        <input type="text" class="text-inventory" v-model="price_buy" placeholder="Precio compra" />
        <input type="text" class="text-inventory" v-model="price_sale" placeholder="Precio venta" />
        <div class="items">
          <label>Fecha de movimeinto</label>
          <br />
          <input type="date" v-model="date_movement" class="date-inventory" />
        </div>
        <div class="items p-4">
          <textarea
            class="text-inventory"
            style="width: 20rem"
            v-model="movement"
            placeholder="Ingresar el movimiento"
          ></textarea>
        </div>
      </div>
      <div class="items-center p-3">
        <button
          type="button"
          class="bg-violet-500 text-white rounded-lg p-3"
          style="width: 7rem"
          @click="SaveMovement()"
          >Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MinUid from '../global'

export default {
  name: "app-movement",
  data() {
    return {
      uid: MinUid.Uid,
      code_product: "",
      name_product: "",
      movement: "",
      date_movement: "",
      quantity_entrance: "",
      quantity_exit: "",
      price_buy: "",
      price_sale: "",
    };
  },

  methods: {
    ...mapActions("movement", ["getMovementAll", "postMovement"]),

    SaveMovement() {
      if (
        this.code_product != "" &&
        this.name_product != "" &&
        this.movement != "" &&
        this.quantity_entrance != "" &&
        this.quantity_exit != ""
      ){
        if(this.uid != ""){
            this.postMovement({
                uid: this.uid,
                code_product: this.code_product,
                name_product: this.name_product,
                movement: this.movement,
                quantity_entrance: this.quantity_entrance,
                quantity_exit: this.quantity_exit,
                price_buy: this.price_buy,
                price_sale: this.price_sale,
            });
            this.code_product = ""
            this.name_product = ""
            this.quantity_entrance = ""
            this.quantity_exit = ""
            this.quantity_entrance = ""
            this.quantity_exit = ""
            this.price_buy = ""
            this.price_sale = ""
        }
      } else {
        alert("Debe llanar todos los campos!");
      }
    },
  },

  created() {
    this.getMovementAll();
  },
};
</script>

<style scoped>
.items {
  align-items: left;
}
</style>
