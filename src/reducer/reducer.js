
import { imagedata } from "../data/test"
import { ADD_TODO } from "../actions/actions"

// var defaultState = 0;

// use defaultState as state
 function todos(state = imagedata, action) {
  switch (action.type) {
    case ADD_TODO:
      let characters = state.filter( item => item.id !== action.id )
      return characters
    default:
      return state
  }
} 

export default todos;


// store.dispatch({ type: 'TEST' })
// 1
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// 2

// export default { store };

