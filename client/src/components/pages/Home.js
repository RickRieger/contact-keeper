import React, { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'add-todo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, addNewTodo(action.payload.name)];
    default:
      return todos;
  }
}

function addNewTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export const Home = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  console.log(todos);

  return (
    <div>
      <h1>Home</h1>

      <form
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onSubmit={handleSubmit}
      >
        <input></input>
      </form>
      <span>
        {todos.map((todo) => {
          return (
            <div>
              {todo.complete ? 'hello' : 'bye'}, {todo.id}, {todo.complete}
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Home;
