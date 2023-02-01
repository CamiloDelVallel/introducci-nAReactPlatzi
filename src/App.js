import React from 'react';
//import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateToDoButton';

const todos = [{
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

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter> 
      </TodoCounter>

      <TodoSearch>
      </TodoSearch>

      <TodoList>
        {todos.map(todo => ( 
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                 />
            ) )}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
