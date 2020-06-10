import React, { useState} from 'react';

const AddTodo = () => {

  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( "handleSubmit" , content )

  }  

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label> Add new Todo </label>
        <input type="text" onChange={handleChange} />        
      </form>
    </div>
  )
}

export default AddTodo
