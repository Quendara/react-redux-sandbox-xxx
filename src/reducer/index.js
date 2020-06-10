
import { imagedata } from "../data/test"

var defaultState = 0;

// use defaultState as state
function todos(state = imagedata, action) {
  switch (action.type) {
    case 'TEST':
      return state
    case 'DECREMENT':
      //return state - 1
    default:
      return state
  }
} 


// store.dispatch({ type: 'TEST' })
// 1
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// 2

// export default { store };

