import React, { useRef } from 'react';
import { NewTodoProps } from '../models/todo.model';

import '../styles/NewTodo.css';

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const { onAddTodo } = props

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };
  
    return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Enter your TODO</label>
            <input 
              type="text" 
              id="todo-text" 
              ref={textInputRef} 
              style={{ marginTop: '1rem' }} 
            />
        </div>
        <button type="submit">ADD TODO</button>
    </form>
    );
};

export default NewTodo;