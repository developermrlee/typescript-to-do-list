import React from 'react'
import { TodoListProps } from '../models/todo.model';

import '../styles/TodoList.css'

const TodoList: React.FC<TodoListProps> = props => {
    const { items, onDeleteTodo } = props
    return <ul>
        {items.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>))}

    </ul>;
};

export default TodoList;