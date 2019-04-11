import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'
import createTodo from '@/components/createTodo'
import Vue from 'vue'

describe('TodoList.vue', () => {

  let todo, event, vm;
  beforeEach(() => {
    todo = createTodo('Buy Milk')
    event = {
      target: {
        title: {value: todo.title}, reset(){}
      }
    }
    const Constructor = Vue.extend(TodoList)
    vm = new Constructor().$mount
  })



  it('contains todos data property', () => {
    const {todos} = TodoList.data()
    expect(todos).toBeDefined()
    expect(todos).toEqual([])
    expect(todos.length).toBe(0)
  })

  it('#addTodo adds a todo to todos', () => {
    const vm = new Vue(TodoList).$mount()
    vm.addTodo(event)
    expect(vm.todos.length).toBe(1)
    vm.$destroy()
  })

  it('#deleteTodo removes a todo from todos', () => {
    const vm = new Vue(TodoList).$mount()
    vm.addTodo(event)
    const todo = vm.todos[0]
    expect(vm.todos.length).toBe(1)
    vm.deleteTodo(todo)
    expect(vm.todos.length).toBe(0)
    vm.$destroy()
  })

  it('#updateTodo should update todo', () => {
    const vm = new Vue(TodoList).$mount()
    vm.addTodo(event)
    const todo = vm.todos[0]
    vm.toggleTodoComplete(todo.id)
    expect(vm.todos[0].completed).toBe(true)
    vm.$destroy()
  })
    
})

