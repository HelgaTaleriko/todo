import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

function App() {
    return (
        <section className="todoapp">
            <Header/>

            <section className="main">
                <TaskList/>
                <Footer/>
            </section>
        </section>
);
}

export default App;
