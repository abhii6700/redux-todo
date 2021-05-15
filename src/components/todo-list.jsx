import React from 'react'
import { connect } from 'react-redux'
import { deletetodo } from '../actions'

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => <li
                key={index}>
                {todo.payload}
                <button onClick={() => props.dispatch(deletetodo(todo.id))}>Delete</button>
            </li>)}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(TodoList);
