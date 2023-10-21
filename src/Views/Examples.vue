<script>
  import {productos} from '@/components/datos.js'
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
  <!-- 
  <h1> cena con el rey {{contador + 1}} {{nombreRey}}</h1>
  <br>
  <img :src=imgn alt=""/>
  <button class="btn" @click="incremento()">Siguiente {{contador + 1}}/7</button>
  -->
  <div class="container-fluid mt-3" style="background-color: blueviolet;">
      <div class="row justify-content-between">
        <div class="col">
          <div class="row">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Fin de semana</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rey in productos">
                  <td v-text="rey.nombre"></td>
                  <td v-text="rey.precio"></td>
                  <td v-text="rey.finDeSemana"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <router-link to="/Admin" class="btn btn-primary">Admin</router-link>
          </div>
        </div>

        <div class="col">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>