import React from "react";
import Task from "./Task/Task";
import PropTypes from "prop-types";

const TaskList = ({todos, onDeleted, onToggleCompleted}) => {
    TaskList.propTypes={
        todos: PropTypes.arrayOf(PropTypes.object),
        onDeleted:PropTypes.func,
        onToggleCompleted:PropTypes.func,
    }

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