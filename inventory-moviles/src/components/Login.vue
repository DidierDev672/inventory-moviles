<template>
  <div class="container-inventory p-4">
    <div class="card">
      <strong>Iniciar Sesion</strong>
      <div class="grid-user p-3">
        <input
          type="email"
          class="text-inventory"
          v-model="email"
          placeholder="Correo electronico"
        />
        <input
          type="password"
          class="text-inventory"
          v-model="password"
          placeholder="Contraseña"
        />
      </div>
      <div class="p-4 items-center">
        <button type="button" class="bg-violet-500 text-white p-4 rounded-lg" @click="start()">
          Iniciar Session
        </button>
        <div class="p-3 items-center">
          <router-link to="/register-user"
            >Registar usuario</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app-login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions("auth", ["signAuth"]),

    start() {
      if (this.email != "" && this.password != "") {
        this.signAuth({ email: this.email, password: this.password });
      } else {
        alert("Debe llenar todos los campos!");
      }
    },
  },
};
</script>

<style scoped>
.grid-user {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-template-rows: minmax(0, auto);
}
</style>