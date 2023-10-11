import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

export default class App extends React.Component {
    maxId = 10
    state = {
        todoData: [
            this.createTodoItem('убрать квартиру'),
            this.createTodoItem('заказать продукты'),
            this.createTodoItem('покормить котю'),
        ],
        status:'all'

    }

    createTodoItem(label) {
        return {
            label,
            completed: false,
            id: this.maxId++
        }

    }

    handleAddItem = (text) => {

        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [
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

    onToggleCompleted = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[idx]
            const newItem = {
                ...oldItem,
                completed: !oldItem.completed
            }
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]
            return {todoData: newArray}
        })
    }

    handleFilterChange = (status) => {
        this.setState({ status });
    }
    filter(items,status){
        switch (status){
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.completed);
            case 'completed':
                return items.filter((item)=>item.completed);
            default:
               return  items;
        }
    }
    onDeleteCompletedItems=()=>{
        this.setState(({todoData}) => {
            const filter1 = todoData.filter((el) => el.completed === false)
            const newArray = [
                ...filter1
            ]

            console.log(newArray)
            return {todoData: newArray}


        })


    }


        render()
        {
            const {todoData,status}=this.state
            const visibleItems=this.filter(todoData,status)
            const completedCount = todoData.filter((el) => el.completed).length
            const todoCount = todoData.length - completedCount
            return (
                <section className="todoapp">
                    <Header onAddItem={this.handleAddItem}/>
                    <section className="main">
                        <TaskList
                            todos={visibleItems}
                                  onDeleted={this.handleDeleteItem}
                                  onToggleCompleted={this.onToggleCompleted}
                        />
                        <Footer
                            completedCount={completedCount}
                            todoCount={todoCount}
                            filter={status}
                            handleFilterChange={this.handleFilterChange}
                            onDeleteCompletedItems={this.onDeleteCompletedItems}
                        />
                    </section>
                </section>
            );
        }
    }


