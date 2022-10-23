import React, { Component } from "react";

export default class Form extends Component {
  state = {
    title: "JavaScript",
    textTitle: "JavaScript is Awesome",
    select: "Vue",
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        textTitle: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        select: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing Happend");
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, textTitle, select, isAwesome } = this.state;
    console.log(title, textTitle, select, isAwesome);
  };

  render() {
    const { title, textTitle, select, isAwesome } = this.state;

    return (
      <>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="submitfrom">
            Submit Form:
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={this.handleChange}
            />
          </label>

          <br />
          <br />
          <label htmlFor="textarea">
            Textarea:
            <textarea
              name="text"
              value={textTitle}
              onChange={this.handleChange}
            ></textarea>
          </label>

          <br />
          <br />

          <select value={select} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue"> Vue</option>
          </select>

          <br />
          <br />

          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <input type="submit" value="Submit" onChange={this.submitHandler} />
        </form>
      </>
    );
  }
}
