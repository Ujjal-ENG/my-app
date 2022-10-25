import React, { Component } from "react";

export default class ClickCounter extends Component {
  render() {
    const { count, countIncrement,text } = this.props;
    return (
      <>
        <button type="button" onClick={countIncrement}>
          Click {count} Times
        </button>
        <h1>{text}: {count}</h1>
      </>
    );
  }
}
