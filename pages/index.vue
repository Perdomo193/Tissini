<template>
  <div>
    <layout></layout>
    <login v-show="sesion_res=='init'" @sesionres="sesion_req"></login>
    <home v-show="sesion_res=='activo'"></home>
  </div>
</template>

<script src ="./../layouts/index.js"></script>


