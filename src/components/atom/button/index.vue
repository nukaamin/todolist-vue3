<template>
    <button :type="type">
      {{text}}
      <img v-if="icon" :src="icon" alt="icon">
    </button>
  </template>
  <script setup lang="ts">
  defineProps({
    type: {
      typel: String,
      default: 'button',
      validator: (value: string) => ['submit', 'reset', 'button'].includes(value)
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  })
  </script>
  <style lang="">
    
  </style>