import React from 'react'

export const WithCounter = (orginalComponent) => {
  class NewComponent extends React.Component{
    state = {
      count: 0,
    };
    countIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      const { count } = this.state;
      return <orginalComponent count={count} countIncrement={this.countIncrement} />
    }
  }
  return NewComponent
}
