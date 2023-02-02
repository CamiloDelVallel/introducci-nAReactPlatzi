import React from 'react';
//import './App.css';
import { AppUI } from './AppUI';

// const defaultTodos = [{
//   text: 'lavar ropa',
//   completed: false
// },
// {
//   text: 'lavar platos',
//   completed: false
// },
// {
//   text: 'sacar a Maka',
//   completed: false
// }];

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(initialValue);
  let parsedItem ;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text:todos[todoIndex].text,
    //   completed:true
    // }
  };

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  // const createTodo = (text)=>{
  //   const newTodos = [...todos];
  //   newTodos.push(text);
  //   setItem(newTodos);
  //   alert('hola')
  // }


    return (
      <AppUI 
        totalTodos = {totalTodos}
        completedTodos = {completedTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        searchedTodos = {searchedTodos}
        okTodo = {okTodo}
        deleteTodo = {deleteTodo}
      />
    );
  
}


export default App;
