import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    }


    return (
        <form onSubmit={onSubmit}>
            <label>
                Nuevo TO-DO
            </label>
            <textarea 
            value={newTodoValue}
            onChange={onWrite}
            placeholder="Escribe acá">

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button-add"
                    onClick={onCancel}>
                        Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >Añadir</button>

            </div>
        </form>
    )
}

export { TodoForm };