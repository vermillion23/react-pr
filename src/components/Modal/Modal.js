import "./Modal.css";

function Modal({ closeModal, removeTask }) {
    return (
    <div className="modal__background">
        <div className="modal__container">
            <button className="modal__close-btn" onClick={() => closeModal(false)}> X </button>
            <div className="modal__body">
                <h1>Are you sure?</h1>
            </div>
            <div className="modal__footer">
                <button className="btn" onClick={() => closeModal(false)}>Cancel</button>
                <button className="btn" onClick={() => removeTask(true)}>Yes</button>
            </div>
        </div>
    </div>
    )
}

export default Modal
