import React from "react";
import Button from "./Button";
class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

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
    const { locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      button = <Button change={this.handleClicked} locale="en-US" show={false}></Button>;
    } else {
      button = <Button change={this.handleClicked} locale="bn-BD" show={true}></Button>;
    }
    return (
      <>
        <h1 className="heading">
          <span className="text">
            Hello {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {button}
      </>
    );
  }
}

export default Clock;
