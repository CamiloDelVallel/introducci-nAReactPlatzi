import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateToDoButton';
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

function AppUI()  {
    const {error,
    loading,
    searchedTodos,
    okTodo,
    deleteTodo,
    openModal,
    setOpenModal
     } = React.useContext(TodoContext);
    
    return (
      
        <React.Fragment>
        <TodoCounter >
        </TodoCounter>
        <TodoSearch>
        </TodoSearch>

        <TodoList>
          {error && <p>Pailas, error</p>}
          {loading && <p>Estamos cargando, no desdesperes</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

          
          
          {searchedTodos.map(todo => ( 
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>okTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm /> 
          </Modal>
        )}
        
       
        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />
      </React.Fragment>
    );
}

export {AppUI};