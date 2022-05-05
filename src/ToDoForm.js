import { useState } from 'react'

function ToDoForm({ addTask }){

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInput !=='') {
            addTask(userInput)
        }
        setUserInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Add new"
            />
            <button className="btn">Save</button>

        </form>
    )
}

export default ToDoForm
