import React from "react";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-Bd" };

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClicked = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    const { date, locale } = this.state;
    return (
      <>
        <h1 className="heading">
          <span className="text">
            Hello {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <button onClick={this.handleClicked.bind("en-US")}>
          Click Me TO Change the Time Zone
        </button>
      </>
    );
  }
}

export default Clock;
