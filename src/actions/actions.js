export const  ADD_TODO = 'ADD_TODO'

// list of actions
export function addTodoById( id ) {
  const action = {
    type: ADD_TODO,
    id // == id:id
  }

  return action;

}

export function filterByRating( rating ) {
  const action = {
    type: ADD_TODO,
    rating // == rating:rating
  }

  return action;

}