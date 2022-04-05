<template>
  <div class="login">
    <div class="form">
      <img src="./../../static/img/icon.png" alt="" class="image">
      <label class="title">Ingresa el numero de tu asesora correspondiente</label>
      <input type="password" class="form-control input" v-model="password" placeholder="Contraseña" v-on:keyup.enter="sesion">
    </div>
  </div>
</template>

<style src = "./login.css"></style>
<script src = "./login.js"></script>