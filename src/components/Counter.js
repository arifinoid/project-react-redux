import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Clicked: {this.props.count} times</p>
        <p style={{ textAlign: "center" }}>
          <button
            style={{ margin: "5px" }}
            onClick={() => {
              this.props.dispatch({ type: "INCREMENT" });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.props.dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
