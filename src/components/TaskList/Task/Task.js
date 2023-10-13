import React from "react";
import TaskCheckbox from "./TaskButton/TaskCheckbox";
import TaskEdit from "./TaskButton/TaskEdit";
import TaskDelete from "./TaskButton/TaskDelete";
import TaskTimeCreated from "./TaskText/TaskTimeCreated";
import TaskText from "./TaskText/TaskText";
import {formatDistanceToNow} from "date-fns";
import {ru} from "date-fns/locale";
import PropTypes from "prop-types";


export default class Task extends React.Component {
    static propTypes={
        label: PropTypes.string,
        time:PropTypes.number,
        completed: PropTypes.bool
    }
    render() {


        const {label,onToggleCompleted, onDeleted, completed,time} = this.props

        const distanceToNow = formatDistanceToNow( time,{
            includeSeconds: false,
            locale: ru,
            addSuffix: true,
        });


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
                        <TaskTimeCreated distanceToNow={distanceToNow} />

                    </label>
                </div>
                <TaskEdit/>

                <TaskDelete onDeleted={onDeleted}/>
            </div>

        )

    }
}

