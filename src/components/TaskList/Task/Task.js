import React from "react";
import TaskCheckbox from "./TaskButton/TaskCheckbox";
import TaskEdit from "./TaskButton/TaskEdit";
import TaskDelete from "./TaskButton/TaskDelete";
import TaskTimeCreated from "./TaskText/TaskTimeCreated";
import TaskText from "./TaskText/TaskText";

export default class Task extends React.Component {
    render() {

        const {label,onToggleCompleted, onDeleted, completed} = this.props


        let classNames = "description"
        if (completed) {
            classNames += " completed"
        }
        return (

            <div className="view">
                <div>
                    <TaskCheckbox click={onToggleCompleted}/>
                    <label>
                        <TaskText label={label} classnames={classNames}/>
                        <TaskTimeCreated/>
                    </label>
                </div>
                <TaskEdit/>
                <TaskDelete onDeleted={onDeleted}/>
            </div>

        )

    }
}

