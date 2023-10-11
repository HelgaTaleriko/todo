import React from "react";
import Task from "./Task/Task";

const TaskList = ({todos, onDeleted, onToggleCompleted}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id}>
                <Task
                    {...itemProps}
                    onDeleted={() => {onDeleted(id)}}
                    onToggleCompleted={()=>{onToggleCompleted(id)}}
                />
            </li>

        )

    })
    return (
        <div>
            <ul className="todo-list">
                {elements}
            </ul>
        </div>

    )
}

export default TaskList