import React from "react";

export default class TasksFilter extends React.Component{
    render() {
        return(
            <div>
                <ul className="filters">
                    <li>
                        <button className="selected">All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>
            </div>
        )
    }
}
