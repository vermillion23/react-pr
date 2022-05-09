import './App.css';
import Navbar from './components/Navbar/Navbar'
import TodoList from './components/TodoList/TodoList';
function App() {

    return (
        <div className="app">
            <Navbar />
            <TodoList />

        </div>
    );
}

export default App;
