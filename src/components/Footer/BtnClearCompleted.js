import React from "react";

const BtnClearCompleted = ({onDeleteCompletedItems}) => {
    return (
        <button onClick={onDeleteCompletedItems} className="clear-completed">Clear completed</button>

    )
}
export default BtnClearCompleted