import React, { Component } from "react";

export default class HoverCounter extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <>
        <h1 onMouseOver={countIncrement}>Moved {count} times</h1>
      </>
    );
  }
}
