import React from "react";
import { connect } from "react-redux";

var maxList = [50, 100, 200];

const Max = (props) => {
  function dispatchMax(max) {
    props.dispatch({
      type: "handleMax",
      max: max,
    });
  }
  return (
    <>
      <h3>max</h3>
      <div className="flex bar">
        {maxList.map((max) => {
          return (
            <button
              key={max}
              onClick={() => dispatchMax(max)}
              className={props.max === max ? "active" : ""}
            >
              {max}
            </button>
          );
        })}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { max: state.max };
}

export default connect(mapStateToProps)(Max);
