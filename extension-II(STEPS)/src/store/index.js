import { createStore } from "redux";

const countReducer = function (state = { counter: 0, steps: 1 }, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + state.steps };
    case "decrement":
      return { ...state, counter: state.counter - state.steps };
    case "reset":
      return { counter: 0, steps: 1 };

    case "handleSteps":
      return { ...state, steps: action.steps };

    default:
      return state;
  }
};
let store = createStore(countReducer);
export default store;
