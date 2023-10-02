import React from "react";
import TaskCheckbox from "./TaskButton/TaskCheckbox";
import TaskEdit from "./TaskButton/TaskEdit";
import TaskDestroy from "./TaskButton/TaskDestroy";

const Task = () => {
    return (
        <div className="view">
            <TaskCheckbox/>
            <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
            </label>
            <TaskEdit/>
            <TaskDestroy/>
        </div>

    )
}
export default Task