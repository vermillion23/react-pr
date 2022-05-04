// import './App.css';
import { useState, useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import ToDo  from './ToDo'
import ToDoForm from './ToDoForm'

function App() {

    const [todos, setTodos] = useLocalStorage('todos', [])
    const [filtered, setFiltered] = useState(todos)

    useEffect(() => {
        setFiltered(todos)
    }, [todos])
    // const activeTasks = ...todos.filter(todo => todo.complete == false)
    // const completedTasks = ...todos.filter(todo => todo.complete == true)
    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos
                .map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : {...todo}
            )
        ])
    }

    function todoFilter(complete) {
        if(complete === 'all') {
            setFiltered(todos)
        } else {
            let newTodo = [...todos].filter( item => item.complete === complete)
            setFiltered(newTodo)
        }
    }

  return (
    <div className="App">
        <header>
            <h1>List of tasks:  {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask}/>
        {filtered.sort((t1,t2) => Number(t1.complete) - Number(t2.complete)).map((todo) => {
            return (
                <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                />
            )
        })}
        <div className="all-items" onClick={ ()=>todoFilter('all')} > ALL </div>
        <div className="completed-items" onClick={ ()=>todoFilter(true)} > COMPLETED </div>
        <div className="due-items" onClick={ ()=>todoFilter(false)} > DUE </div>
    </div>
  );
}

export default App;
