import React from "react";

export default class TaskCheckbox extends React.Component{



    render() {
        const {click}=this.props

        return (
            <input className="toggle" type="checkbox" onClick={click}/>
        )

    }
}
