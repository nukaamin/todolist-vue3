<script setup lang="ts">
import AtomButton from '../components/atom/button/index.vue'
import AtomCard from '../components/atom/card/index.vue'
import AtomInputs from '../components/atom/input/index.vue'
import Icon from '../components/atom/icons/index.vue'
import type { ITodo } from '../stores/todo'
import { useTodoStore } from '../stores/todo'
import {ref} from 'vue'
import { storeToRefs } from 'pinia'


const store = useTodoStore()
const {todos} = storeToRefs(store)
const todo = ref('')

function addTodo () {
  const payload: ITodo = {
    input: todo.value,
    isDone: true,
    isActive: true,
  }
  store.addTodo(payload)
  todo.value = ''
}
function markAsDone(index: number) {
  store.doneTodo(index)
}
function markAsUnDone(index: number) {
  store.unDoneTodo(index)
}
function markAsRemove(index: number) {
  store.removeTodo(index)
}

</script>

<template>
  <div class="header">
    <h1 class="header-title">Welcome in Todo List</h1>
  </div>
    <main>
    <div class="form-field">
      <form @submit.prevent="addTodo">
        <p class="input_title">Please input your todo</p>
        <AtomInputs type="text" v-model="todo" />
        
        <AtomButton class="btn-submit" text="Add Todo" type="submit" />
      </form>
    </div>
    <div class="todo">
      <p>Todo</p>
      <template v-for="todo, index in todos" :key="index">
        <AtomCard v-if="todo.isActive === true && todo.isDone === true">
          <p>{{ todo.input }}</p>
          <Icon type="check" @click="markAsDone(index)" />
        </AtomCard>
      </template>
    </div>
    <div class="done-todo">
      <p>Done</p>
      <template v-for="todo, index in todos" :key="index">
        <AtomCard v-if="todo.isActive === true && todo.isDone === false">
          <p>{{ todo.input }}</p>
          <div class="done-todo-btn">
            <Icon type="reload" @click="markAsUnDone(index)" />
            <Icon type="trash" @click="markAsRemove(index)" />
          </div>
          </AtomCard>
      </template>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
  background-color: #cbe0d5;
  min-height: calc(100vh - 80px);
  text-align: center;
}
.header {
  width: 100%;
}
.header-title {
  background-color: #2f8256;
  color: white;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
}
.input_title {
  font-weight: 600;
  text-transform: capitalize;
}
.btn-submit {
  border-radius: 5px;
  border-color: #2f8256;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
}
.btn-submit:hover {
  background-color: white;
}
.form-field p {
  font-size: large;
  color: #000;
  margin: 10px 0;
}
.todo,
.done-todo {
  margin: 10px;
  padding: 10px;
  background-color: #2f8256;
  min-height: 10rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.todo > p,
.done-todo > p {
  font-size: 24px;
  color: #000;
  font-weight: 600;
}
.done-todo-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
