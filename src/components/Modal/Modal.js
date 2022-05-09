import "./Modal.css";

function Modal({closeModal, removeTask}) {
    return (<div className="modalBackground">
        <div className="modalContainer">
                <button className="btn" onClick={() => closeModal(false)}> X </button>
            <div className="title">
                <h1>Are you sure?</h1>
            </div>
            <div className="footer">
                <button className="btn" onClick={() => closeModal(false)}>Cancel</button>
                <button className="btn" onClick={() => removeTask(true)}>Yes</button>
            </div>
        </div>
    </div>)
}

export default Modal
