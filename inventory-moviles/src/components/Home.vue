<template>
    <div class="container p-6">
      <div class="grid-inventory">
          <div class="card">
            <h3>Productos</h3>
            <div class="py-3">
                <router-link to="/product" class="btn-moviles">Producto</router-link>
            </div>
          </div>
          <div class="card">
              <h3>Movimientos</h3>
              <div class="py-3">
                  <router-link to="/movement" class="btn-moviles">Movimientos</router-link>
              </div>
          </div>
          <div class="card">
            <h3>Consultar Productos</h3>
            <div class="py-3">
                <router-link to="/query-product" class="btn-moviles">Consultar</router-link>
            </div>
          </div>
          <div class="card">
            <h3>Consultar Movimientos</h3>
            <div class="py-3">
                <router-link to="/query-movement" class="btn-moviles">Consultar</router-link>
            </div>
          </div>
      </div>
    </div>
</template>

<style scoped>
  .container{
      align-items: center;
  }
</style>