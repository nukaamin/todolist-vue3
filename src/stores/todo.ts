import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ITodo {
  input: string,
  isDone: boolean,
  isActive: Boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<ITodo[]>([])

  function addTodo (todo: ITodo) {
    todos.value.push(todo)
  }
  function doneTodo (index: number) {
    todos.value[index].isDone = false
  }
  function unDoneTodo (index: number) {
    todos.value[index].isDone = true
  }
  function removeTodo (index: number) {
    todos.value[index].isActive = false
  }
  return { addTodo, doneTodo, unDoneTodo, todos, removeTodo }
})
