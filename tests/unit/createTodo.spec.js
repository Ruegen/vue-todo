import createTodo from '@/components/createTodo'
import { isIterable } from 'core-js';

describe('createTodo', () => {
    let todo, title;
    beforeEach(() => {
        title = 'Buy Milk'
        todo = createTodo(title)
    })

    it('should return an object', () => {
        expect(typeof todo).toBe('object')
    })

    it('should have a random id', () => {
        expect(typeof todo.id).toBe('string')
        expect(todo.id.length > 4).toBe(true)
    })

    it('should have matching title', () => {
        expect(typeof todo.title).toBe('string')
        expect(todo.title).toBe(title)
    })

    it('should have a bool property "completed"', () => {
        expect(typeof todo.completed).toBe('boolean')
        expect(todo.completed).toBe(false)
    })

})