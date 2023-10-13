import React from "react";

export default class TaskDelete extends React.Component {
  render() {
    return (
      <button
        className="icon icon-destroy"
        onClick={this.props.onDeleted}
      ></button>
    );
  }
}
