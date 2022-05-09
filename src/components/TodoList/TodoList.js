import { useState, useEffect } from 'react'
import ToDo from '../todoItem/ToDo'
import ToDoForm from '../ToDoForm/ToDoForm'
import useLocalStorage from '../../hooks/useLocalStorage'
import "./TodoList.css"

function TodoList() {

    const [todos, setTodos] = useLocalStorage('todos', [])
    const [filtered, setFiltered] = useState(todos)

    useEffect(() => {
        setFiltered(todos)
    }, [todos])
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
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
                .map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
                )
        ])
    }

    function todoFilter(complete) {
        if (complete === 'all') {
            setFiltered(todos)
        } else {
            let newTodo = [...todos].filter(item => item.complete === complete)
            setFiltered(newTodo)
        }
    }

    return (
        <div className="to-do-list">
            <div className="container">

                <div>
                    <header>
                        <h1>List of tasks:  {todos.length}</h1>
                    </header>
                    <ToDoForm addTask={addTask} />
                    {filtered.sort((t1, t2) => Number(t1.complete) - Number(t2.complete)).map((todo) => {
                        return (
                            <ToDo
                                todo={todo}
                                key={todo.id}
                                toggleTask={handleToggle}
                                removeTask={removeTask}
                            />
                        )
                    })}

                </div>
                <div className="btn-group">
                    <div className="all-items btn" onClick={() => todoFilter('all')} > ALL </div>
                    <div className="completed-items btn" onClick={() => todoFilter(true)} > COMPLETED </div>
                    <div className="due-items btn" onClick={() => todoFilter(false)} > DUE </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
