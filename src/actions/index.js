export const addtodo = () => ({
    type: 'ADD_TODO',
    payload,
    id: Math.random()
})

export const deletetodo = () => ({
    type: 'DELETE_TODO',
    id: Math.random()
})