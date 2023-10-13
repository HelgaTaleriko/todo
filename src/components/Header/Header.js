import React from "react";
import NewTaskForm from "./NewTaskForm";

export default class Header extends React.Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddItem={onAddItem} />
      </header>
    );
  }
}
