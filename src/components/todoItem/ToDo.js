import { useState } from "react";
import Modal from "../Modal/Modal";
import "./ToDo.css";

function ToDo({ todo, toggleTask, removeTask }) {
    const [openModal, setOpenModal] = useState(false)
    const handleRemoveTask = (choose) => {
        if (choose === true) {
            removeTask(todo.id)
        }
    }

    return (
        <div className="todo-item">
            <div className="container">
                <div key={todo.id} className="item-todo__content">
                    <div>
                        <div
                            className={todo.complete ? "item-todo strike" : "item-todo"}
                            onClick={() => toggleTask(todo.id)}>
                            {todo.task}
                        </div>
                        <div className="item-todo__data-text">Created at {todo.createdAt}</div>
                    </div>
                    <div className="btn" onClick={() => { setOpenModal(true) }}> Delete </div>
                </div>
                {openModal &&
                    <Modal closeModal={setOpenModal} removeTask={handleRemoveTask} />
                }
            </div>
        </div>
    )
}

export default ToDo
