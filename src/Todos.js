import React, { Component, useState } from "react";

const Todos = ({ todos, deleteTodoHandle }) => {




  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodoHandle(todo.id);
            }}
          >
            {todo.id} - {todo.filename}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left</p>
  );

  return (
    <div className="collection">
      <h2 className="center blue-text">Hello</h2>
      {todoList}
    </div>
  );
};

export default Todos