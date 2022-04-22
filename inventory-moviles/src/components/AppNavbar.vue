<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <span class=" navbar-brand">
        Inventory PR
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">
              Productos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/movement" class="nav-link"
              >Movimientos</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <li class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              id="navabrDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </a>
            <template v-if="!AuthUser">
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/login" class="dropdown-item"
                    >Inciar Session</router-link
                  >
                </li>
                <li>
                  <router-link to="/register-user" class="dropdown-item"
                    >Registrar Usuario</router-link
                  >
                </li>
              </ul>
            </template>
            <template v-else>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                v-for="(list, index) in AuthUser"
                :key="index"
              >
                <li>
                  <span class="dropdown-item">{{ list.email }}</span>
                </li>
                <li>
                  <span class="dropdown-item">{{ list.name_full }}</span>
                </li>
                <li>
                  <router-link to="/" class="dropdown-item">Perfil</router-link>
                </li>
              </ul>
            </template>
          </li>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { mapGetters } from "vuex"
import MininsUid from '../global/index'

export default {
  name: "app-navbar",
  data() {
    return {
      Uid: MininsUid.Uid,
    };
  },

  computed: {
    ...mapGetters("auth", ["getAuthUid"]),

    AuthUser() {
      return this.getAuthUid(this.Uid);
    },
  },

  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.Uid = uid;
        MininsUid.Uid = this.Uid
      }
    });
  },
};
</script>

<style  scoped>
li {
  list-style: none;
}

.dropdown-menu{
  background-color: #f8f9fa;
  border-radius: 7px;
  border: 2px solid #e9ecef;
  box-shadow: 1px 1px 1px 1px #dee2e6;
}

.dropdown-item:hover{
  border-radius: 7px;
  border: 1px solid #e9ecef;
}

.navbar-brand{
  padding: 10px;
}
</style>