import { useState } from 'react'
import "./ToDoForm.css"

function ToDoForm({ addTask }) {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInput !== '') {
            addTask(userInput)
        }
        setUserInput("")
    }

    return (
        <div className="to-do-form container">
            <form className="content" onSubmit={handleSubmit}>
                <input
                    value={userInput}
                    type="text"
                    onChange={handleChange}
                    placeholder="Add new"
                />
                <button className="btn">Save</button>

            </form>
        </div>
    )
}

export default ToDoForm
