import { createStore } from "redux";

const countReducer = function (state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return { counter: 0 };

    default:
      return state;
  }
};
let store = createStore(countReducer);
export default store;
