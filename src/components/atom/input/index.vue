<template>
    <div>
      <input class="inputs-field" :type="type" :value="modelValue" @input="onInput" required>
    </div>
  </template>
  <script lang="ts" setup>
  defineProps({
    type: {
      typel: String,
      default: 'text',
      validator: (value: string) => ['text', 'password'].includes(value)
    },
    modelValue: {
      type: String,
      default: ''
    }
  })
  const emits = defineEmits(['update:modelValue'])
  function onInput(event: any) {
    emits('update:modelValue', event.target.value)
  }
  </script>
  <style scoped>
  .inputs-field {
    width: 100%;
    border-color: none;
    border-radius: 8px;
    height: 5rem;
    background-color: white;
    font-size: 24px;
    margin-bottom: 1rem;
  }
  .inputs-field:focus-visible {
    border-color: #2f8256;
  }
  </style>