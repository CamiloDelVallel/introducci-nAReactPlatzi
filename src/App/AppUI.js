import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateToDoButton';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    okTodo,
    deleteTodo,
})  {
    return (
        <React.Fragment>
        <TodoCounter 
          total = {totalTodos}
          completed = {completedTodos}
          >
        </TodoCounter>

        <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        >
        </TodoSearch>

        <TodoList>
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

        <CreateTodoButton
        //   createdTodo={()=>createTodo()}
        />
      </React.Fragment>
    );
}

export {AppUI};