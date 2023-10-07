import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

export default class App extends React.Component {
    maxId = 10
    state = {
        todoData: [
            {label: 'убрать квартиру', completed: false, id: 1},
            {label: 'заказать продукты', completed: false, id: 2},
            {label: 'покормить котю', completed: false, id: 3}
        ]

    }


    handleAddItem = (text) => {

        const newItem={
            label:text,
            completed: false,
            id:this.maxId++
        }
            this.setState(({todoData})=>{
                const newArr=[
                    ...todoData,
                    newItem
                ]
                return {todoData: newArr}
            })
    }
    handleDeleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {todoData: newArray}


        })
    }

    render() {
        return (
            <section className="todoapp">
                <Header onAddItem={this.handleAddItem}/>

                <section className="main">
                    <TaskList todos={this.state.todoData}
                              onDeleted={this.handleDeleteItem}/>
                    <Footer/>
                </section>
            </section>
        );
    }
}


