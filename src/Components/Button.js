import React from "react";

class Button extends React.Component {
  render() {
    const { change, locale,show } = this.props;
    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change CLock" : "Gori Change Koron"}
        </button>
        {show && <p>Hello</p>}
      </>
    );
  }
}

export default Button;
