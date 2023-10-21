<script>
</script>

<template>
  
    <div class="row bg-transparent" style="padding: 1.5rem;">
      <div class="col bg-transparent">
        <p class="fs-1 text-danger" style="font-family: ;">Opciones de control del Root</p>
      </div>
    </div>

    <div class="row bg-transparent justify-content-evenly" style="padding-bottom: 1rem;">
      <div class="col-4">
          <router-link to="/Examples" class="btn btn-danger btn-lg btn-block">Agregar Admin</router-link> 
      </div>
      <div class="col-4">
          <router-link to="/Register" class="btn btn-danger btn-lg btn-block">Editar Admin</router-link> 
      </div>
    </div>        

 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');

.text-danger{
    font-family: 'Aclonica', sans-serif;
  }
  
</style>
