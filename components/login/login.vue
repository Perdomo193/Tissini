<template>
  <div class="login">
    <div class="form">
      <img src="./../../static/img/icon.png" alt="" class="image">
      <label class="title">{{ data.title }}</label>
      <input type="password" class="form-control input" v-model="password" placeholder="Contraseña" v-on:keyup.enter="sesion">
    </div>
  </div>
</template>

<style src = "./login.css"></style>
<script src = "./login.js"></script>