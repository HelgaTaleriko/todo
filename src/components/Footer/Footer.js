import React from "react";
import TasksFilter from "./TasksFilter";
import TodoCount from "./TodoCount";
import BtnClearCompleted from "./BtnClearCompleted";

const Footer = ({todoCount,completedCount,handleFilterChange,filter,onDeleteCompletedItems}) => {
    return (
        <footer className="footer">
            <TodoCount
                completedCount={completedCount}
                todoCount={todoCount}
            />
            <TasksFilter
                handleFilterChange={handleFilterChange}
                filter={filter}

            />
            <BtnClearCompleted
                onDeleteCompletedItems={onDeleteCompletedItems}/>
        </footer>
    )
}

export default Footer