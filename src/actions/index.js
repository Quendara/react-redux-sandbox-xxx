export const  ADD_TODO = 'ADD_TODO'

export function addCharacterById( id ) {
  const action = {
    type: ADD_TODO,
    id // == id:id
  }

  return action;

}