import React from "react";

export default class TasksFilter extends React.Component {
    buttons = [
        { name:'all', label:'All'},
        { name:'active', label:'Active'},
        { name:'completed', label:'Completed'}
    ]

    // при нажатии на фильтр добавляется класс class="selected"
    render() {
        const {filter,handleFilterChange}=this.props

        const buttons=this.buttons.map(({name,label})=>{
            const isActive=filter===name;
            const clazz= isActive?'selected':'#'
            return (

                <button key={name}
                        className={` ${clazz} `}
                onClick={()=>handleFilterChange(name)}>
                    {label}
                </button>

            )

        })


        return (
            <div>
                <ul className="filters">
                    <li>
                        {buttons}
                    </li>

                </ul>
            </div>
        )
    }
}
