import React from "react";

const TodoCount =({todoCount,completedCount})=>{
    return(
        <span className="todo-count">{todoCount} active, {completedCount} completed</span>

    )
}
export default TodoCount