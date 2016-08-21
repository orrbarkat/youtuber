import React from "react";

export default class Footer extends React.Component {
  handleChange(e) {
    const title = document.getElementById("newInput").value;
    console.log(title);
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <input id="newInput" />
        <button onClick={this.handleChange.bind(this)}>ban this artist!</button>
      </div>
    );
  }
}
