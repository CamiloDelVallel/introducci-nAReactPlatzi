import React from 'react';
//import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateToDoButton';

const defaultTodos = [{
  text: 'lavar ropa',
  completed: false
},
{
  text: 'lavar platos',
  completed: false
},
{
  text: 'sacar a Maka',
  completed: false
}];



function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;
  
  let searchedTodos = [];
  
  if (!searchValue.length >=1 ){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo=>{

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const okTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);


    // todos[todoIndex] = {
    //   text:todos[todoIndex].text,
    //   completed:true
    // }
  };

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  const createTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    alert('hola')
  }


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
          createdTodo={()=>createTodo()}
        />
      </React.Fragment>

    );
  
}


export default App;
