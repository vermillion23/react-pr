import {useState} from "react";
import Modal from "./components/Modal";

function ToDo({todo, toggleTask, removeTask}){
    const [openModal, setOpenModal] = useState(false)
    const handleRemoveTask = (choose) => {
        if(choose === true) {
            removeTask(todo.id)
        }
    }

    return (
        <div>
        <div key={todo.id} className="item-todo">
            <div
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}>
                {todo.task}</div>
            {/*<div className="item-delete" onClick={() => removeTask(todo.id)}> Delete </div>*/}
                <div className="item-delete" onClick={() => {setOpenModal(true)}}> Delete </div>
            </div>
        {openModal &&
            <Modal closeModal={setOpenModal} removeTask={handleRemoveTask}/>
        }
   </div>
    )
}

export default ToDo
