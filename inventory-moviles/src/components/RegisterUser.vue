<template>
  <div class="container-inventory p-5">
      <form class="card">
          <strong>Registrar usuario</strong>
          <div class="grid-user p-4">
              <input type="text" class="text-inventory" v-model="name_full" placeholder="Nombre completo" />
              <input type="text" class="text-inventory" v-model="number_identification" placeholder="Numero documento" />
              <input type="text" class="text-inventory" v-model="phone" placeholder="Telefono" />
              <input type="email" class="text-inventory" v-model="email" placeholder="Correo electronico"/>
              <input type="password" class="text-inventory" v-model="password" placeholder="Contraseña" />
          </div>
          <div class="p-4 items-center">
              <button type="button" class="bg-violet-600 text-white w-57 p-4 rounded-lg" @click="Register()">Registar</button>
          </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: 'register-user',
    data(){
        return{
            name_full: '',
            number_identification: '',
            phone: '',
            email: '',
            password: ''
        }
    },

    methods:{
        ...mapActions('auth', [
            'CreateUser',
        ]),

        Register(){
            if(this.name_full != '' && this.number_identification != '' && this.phone != '' && this.email != '' && this.password != ''){
                this.CreateUser({
                    name_full: this.name_full,
                    number_identification :this.number_identification,
                    phone: this.phone,
                    email:this.email,
                    password: this.password
                    })
                    this.name_full = ''
                    this.number_identification = ''
                    this.phone = ''
                    this.email = ''
                    this.password = ''
            }else{
                alert('Debe llenar todos los campos')
            }
        }
    }
}
</script>

<style scoped>
.grid-user{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-template-rows: minmax(0, auto);
}

@media (max-width: 600px){
    .grid-user{
        display: flex;
        flex-direction: column;
    }

    .card{
        padding: 0;
        margin: 0;
        width: 100%;
    }
}

@media (max-width: 700px){
    .grid-user{
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 800px){
    .grid-user{
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 900px){
    .grid-user {
        display: flex;
        flex-direction: column;
    }
}
</style>