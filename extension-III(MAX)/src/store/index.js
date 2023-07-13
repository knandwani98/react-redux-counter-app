import { createStore } from "redux";

const countReducer = function (
  state = { counter: 0, steps: 1, max: 2 },
  action
) {
  switch (action.type) {
    case "increment":
      if (state.counter + state.steps <= state.max) {
        return {
          ...state,
          counter: state.counter + state.steps,
        };
      }
      return { ...state, counter: state.counter };
    case "decrement":
      return { ...state, counter: state.counter - state.steps };
    case "reset":
      return { counter: 0, steps: 1 };

    case "handleSteps":
      return { ...state, steps: action.steps };

    case "handleMax":
      return { ...state, max: action.max };

    default:
      return state;
  }
};
let store = createStore(countReducer);
export default store;
