<template>
  <section>
    <div class="grid-form">
      <div class="form-inventory">
        <label>Nombre producto </label>
        <input
          type="text"
          class="text-inventory"
          v-model="name_products"
          placeholder="Nombre producto"
        />
      </div>
      <div class="form-inventory">
        <label>Cantidad entrada</label>
        <input
          type="text"
          class="text-inventory"
          v-model="quantity_entrances"
          placeholder="Cantidad entrada"
        />
      </div>
      <div class="form-inventory">
        <label>Cantidad salida</label>
        <input
          type="text"
          class="text-inventory"
          v-model="quantity_exits"
          placeholder="Cantidad salida"
        />
      </div>
      <div class="form-inventory">
        <label>Precio compra</label>
        <input
          type="text"
          class="text-inventory"
          v-model="price_buys"
          placeholder="Precio compra"
        />
      </div>
      <div class="form-inventory">
        <label>Precio venta</label>
        <input
          type="text"
          class="text-inventory"
          v-model="price_sales"
          placeholder="Precio venta"
        />
      </div>
      <div class="form-inventory">
        <label>Movimiento</label>
        <textarea class="text-inventory" v-model="movements"></textarea>
      </div>
    </div>
    <div class="py-3">
      <button type="button" class="btn-edit" @click="Edit()">
        Editar cambios
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "column-movement",
  props: {
    code_product: String,
    name_product: String,
    movement: String,
    date_movement: String,
    quantity_entrance: String,
    quantity_exit: String,
    price_buy: String,
    price_sale: String,
    id: String,
  },

  data() {
    return {
      name_products: this.name_product,
      movements: this.movement,
      quantity_entrances: this.quantity_entrance,
      quantity_exits: this.quantity_exit,
      price_buys: this.price_buy,
      price_sales: this.price_sale,
    };
  },

  methods: {
    ...mapActions("movement", ["updateMovement"]),

    Edit() {
      this.updateMovement({
        id: this.id,
        name_product: this.name_products,
        movement: this.movements,
        quantity_entrance: this.quantity_entrances,
        quantity_exit: this.quantity_exits,
        price_buy: this.price_buys,
        price_sale: this.price_sales,
      });
    },
  },
};
</script>