import { createStore } from "redux";
import { imagedata } from "./test"

var defaultState = 0;

// use defaultState as state
function action(state = imagedata, action) {
  switch (action.type) {
    case 'TEST':
      return state
    case 'DECREMENT':
      //return state - 1
    default:
      return state
  }
} 

// init with function
export const store = createStore(action)


store.subscribe(() => {
  console.log("state . test", store.getState().length );
  // setTodos( store.getState() ) 
});  

// store.dispatch({ type: 'TEST' })
// 1
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// 2

// export default { store };

