import React from "react";
import { connect } from "react-redux";

var stepsList = [5, 10, 15];

const Steps = (props) => {
  function dispatchSteps(steps) {
    props.dispatch({
      type: "handleSteps",
      steps: steps,
    });
  }

  return (
    <>
      <h3>steps</h3>
      <div class="flex bar">
        {stepsList.map((step) => {
          return (
            <button
              onClick={() => dispatchSteps(step)}
              className={props.steps === step && "active"}
            >
              {step}
            </button>
          );
        })}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { steps: state.steps };
}

export default connect(mapStateToProps)(Steps);
