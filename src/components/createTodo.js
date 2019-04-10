import * as shortid from 'shortid';

const createTodo = (title) => ({
    title,
    id: shortid.generate(),
    completed: false
})

export default createTodo