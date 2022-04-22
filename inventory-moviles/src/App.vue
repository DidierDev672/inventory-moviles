<script setup>
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <AppNavbar />
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods:{
    ...mapActions('auth',[
      'getAuthAll'
    ]),

    ...mapActions('movement', [
      'getMovementAll'
    ])
  },

  created(){
    this.getAuthAll()
    this.getMovementAll()
  }
}
</script>