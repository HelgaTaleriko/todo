import React from "react";
import Task from "./Task/Task";

const TaskList = () => {
    return (
        <div>
            <ul className="todo-list">
                <li className="completed">
                    <Task/>
                </li>
                <li className="editing">
                    <Task/>
                </li>
                <li>
                   <Task/>
                </li>
            </ul>
        </div>

)
}

export default TaskList