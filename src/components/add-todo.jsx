import React from 'react'
import { connect } from 'react-redux'
import { addtodo } from '../actions'

const AddTodo = (props) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            let todoItem = e.target.userInput.value
            props.dispatch(addtodo(todoItem))
            e.target.userInput.value = ''
        }} >
            <input type="text" name='userInput' />
            <button>Add Todo</button>
        </form>
    )
}

export default connect()(AddTodo);
