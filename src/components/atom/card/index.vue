<template>
    <div class="card">   
       <slot />
    </div>
  </template>
  <script setup lang="ts">
  </script>
  <style scoped>
  .card {
    background-color: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .1);
    color: #000;
    border-radius: 10px;
    padding: 10px;
    min-width: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  </style>