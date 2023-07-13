import React from "react";
import { connect } from "react-redux";
import Steps from "./Steps";

const Main = (props) => {
  function dispatchAction(activity) {
    props.dispatch({
      type: activity,
    });
  }

  return (
    <main className="center">
      <section className="counter-body">
        <h2 className="count">{props.counter}</h2>
        <div className="flex action-bar">
          <button onClick={() => dispatchAction("increment")} className="inc">
            +
          </button>
          <button onClick={() => dispatchAction("reset")} className="reset">
            Reset
          </button>
          <button onClick={() => dispatchAction("decrement")} className="dec">
            -
          </button>
        </div>
        <Steps />
      </section>
    </main>
  );
};

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(Main);
