import React, { Component, useState, useEffect } from "react";
import { Provider } from 'react-redux'
import { render } from "react-dom";

import { createStore } from "redux";
import { addTodoById } from "./actions/actions" 

import AddTodo from "./AddTodo";
import Todos from "./Todos";


import rootReducer from "./reducer/reducer"; // import default export as rootReducer

// init with function
export const store = createStore(rootReducer)

store.dispatch({ type: "DECREMENT" });



store.subscribe(() => {
  console.log("state . test", store.getState() );
});  

//

const Trigger = () => {
  const clickHandle = () => {    
    store.dispatch( addTodoById( 2 ) );
  };
  return (
    <button className="btn" onClick={clickHandle}>
      Trigger{" "}
    </button>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [subscribe, setSubscribe] = useState(undefined);

  const deleteTodo = id => {
    console.log("todo : ", id);
    const list = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(list);
  };

  return (
    <Provider store={store} >

      <AddTodo />
      <Trigger />
      <Todos todos={store.getState()} deleteTodoHandle={deleteTodo} />
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
