export const addtodo = (payload) => ({
    type: 'ADD_TODO',
    payload,
    id: Math.random()
})

export const deletetodo = (id) => ({
    type: 'DELETE_TODO',
    id,
})