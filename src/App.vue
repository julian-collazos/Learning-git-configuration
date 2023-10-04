<script setup>
import {productos} from './components/datos.js'
import {ref, computed} from "vue"
const contador = ref(0)
const ruta="https://www.html6.es/img/rey_"
const incremento=()=>{
  if (contador.value < 7){
    contador.value++;
  }
  else{contador.value = 0;}
}
const nombreRey=computed(() =>{
  const elNombre=productos[contador.value].nombre.toLowerCase()
  return elNombre.substring(0,1).toUpperCase() + elNombre.substring(1)
})
/*
const imgn=computed(()=>{
  return `${ruta}${nombreRey.toLowerCase()}.png`
})
*/
</script>

<template>
  <header>
    <div class="wrapper">
      <center><h1>Cenas</h1></center>
    </div>
  </header>
  <body>
    <!-- 
    <h1> cena con el rey {{contador + 1}} {{nombreRey}}</h1>
    <br>
    <img :src=imgn alt=""/>
    <button class="btn" @click="incremento()">Siguiente {{contador + 1}}/7</button>
    -->
    <div class="container">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Fin de semana</th>
        </tr>
        <tr v-for="rey in productos">
          <td v-text="rey.nombre"></td>
          <td v-text="rey.precio"></td>
          <td v-text="rey.finDeSemana"></td>
        </tr>
      </table>
    </div>
  </body>

</template>

<style scoped>
header {
  line-height: 1.5;
}
.btn{
  display: flex;
  place-items: center;
  padding: 1em 2em;
  border-radius: 1em;
  cursor: pointer;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
