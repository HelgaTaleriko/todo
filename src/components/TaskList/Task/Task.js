import React from "react";
import TaskCheckbox from "./TaskButton/TaskCheckbox";
import TaskEdit from "./TaskButton/TaskEdit";
import TaskDelete from "./TaskButton/TaskDelete";
import TaskTimeCreated from "./TaskText/TaskTimeCreated";
// import TaskText from "./TaskText/TaskText";

export default class Task extends React.Component {

    state = {
        completed: false
    }


    onLabelClick = () => {
        this.setState(() => {
            return {
                completed: !this.state.completed
            }
        })
    }

    render() {

        const {completed} = this.state
        const {label} = this.props


        let classNames = "description"
        if (completed) {
            classNames += " completed"
        }
        return (

            <div className="view">
                <div>
                    <TaskCheckbox click={this.onLabelClick}/>
                    <label>
                        <span className={classNames}>{label}</span>
                        <TaskTimeCreated/>
                    </label>
                </div>
                <TaskEdit/>
                <TaskDelete onDeleted={this.props.onDeleted}/>
            </div>

        )

    }
}

