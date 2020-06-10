import React, { Component, useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { Provider } from 'react-redux'
import { render } from "react-dom";
import { createStore } from "redux";

import { rootReducer } from "./reducer";
// import { imagedata } from "./test";

//import {z} from "zebras";
const z = require("zebras");


// import "./style.css";

// init with function
export const store = createStore(rootReducer)


store.subscribe(() => {
  console.log("state . test", store.getState().length );
});  

//

const Trigger = () => {
  const clickHandle = () => {
    store.dispatch({ type: "DECREMENT" });
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
