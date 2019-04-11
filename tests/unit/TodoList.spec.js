import { shallowMount } from "@vue/test-utils"
import TodoList from "@/components/TodoList.vue"
import createTodo from "@/components/createTodo"

describe("TodoList.vue", () => {
  let todo
  beforeEach(() => {
    todo = createTodo("Buy Milk")
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  it("is a Vue component", () => {
    expect(shallowMount(TodoList).isVueInstance()).toBe(true)
  })

  it("contains todos data property", () => {
    const wrapper = shallowMount(TodoList)
    const { todos } = wrapper.vm
    expect(todos).toBeDefined()
    expect(todos).toEqual([])
    expect(todos.length).toBe(0)
  })

  it("#addTodo adds a todo to todos", function() {
    const wrapper = shallowMount(TodoList)
    const input = wrapper.find("form.todo-form > input")
    input.setValue(todo.title)
    wrapper.find("form.todo-form").trigger("submit")
    wrapper.vm.addTodo({
      target: { title: { value: todo.title }, reset() {} }
    })
    expect(wrapper.vm.todos.length).toEqual(1)
  })

  it("#deleteTodo removes a todo from todos", () => {
    const wrapper = shallowMount(TodoList)
    wrapper.vm.todos.push(todo)
    expect(wrapper.vm.todos.length).toEqual(1)
    wrapper.vm.deleteTodo(todo)
    expect(wrapper.vm.todos.length).toEqual(0)
  })

  it("#updateTodo should update todo", () => {
    const wrapper = shallowMount(TodoList)
    wrapper.vm.todos.push(todo)
    wrapper.vm.toggleTodoComplete(todo.id)
    expect(wrapper.vm.todos[0].completed).toBe(true)
  })
})
