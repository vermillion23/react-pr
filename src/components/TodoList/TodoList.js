import { useState, useEffect } from 'react'
import ToDo from '../todoItem/ToDo'
import ToDoForm from '../ToDoForm/ToDoForm'
import SearchTodo from '../SearchTodo/SearchTodo'
import useLocalStorage from '../../hooks/useLocalStorage'
import "./TodoList.css"

function TodoList() {

    const [todos, setTodos] = useLocalStorage('todos', [])
    const [filtered, setFiltered] = useState(todos)
    const [searchField, setSearchField] = useState("");
    // const [filteredByName, setFilteredByName] = useState(todos)

    useEffect(() => {
        setFiltered(todos)
    }, [todos])
    const current = new Date();
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                createdAt: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
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
            let newTodos = todos.filter(item => item.complete === complete)
            setFiltered(newTodos)
        }
    }

    const onSearchTodo = (text) => {

        setSearchField(text)
        if (text.length === 0 ) {
             setFiltered(todos)
            return
        }

        const result = filtered
            .filter(
                todoItem => {
                    return (todoItem
                        .task
                        .toLowerCase()
                        .includes(text.toLowerCase())
                    )
                })
        setFiltered(result)
    }

    const onSortClick = () => {
        const filteredCopy = [...filtered].sort(function (a, b) {
            return ('' + a.task).localeCompare(b.task);
        })
        setFiltered(filteredCopy)
    }

    // useEffect(() => {
    //     const result = filtered
    //         .filter(
    //             todoItem => {
    //                 return (todoItem
    //                     .task
    //                     .toLowerCase()
    //                     .includes(searchField.toLowerCase())
    //                 )
    //             })
    //     setFiltered(result)
    // }, [searchField])

    return (
        <div className="to-do-list">
            <div className="container">

                <div>
                    <header>
                        <h1>List of tasks:  {todos.length}</h1>
                    </header>
                    <div className="btn" onClick={() => onSortClick()}>Sort by name </div>
                    <div className="to-do-list__forms container">
                        <ToDoForm addTask={addTask} />
                        <SearchTodo searchField={searchField} setSearchField={onSearchTodo} />
                    </div>

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
