import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onToggleError}></div>
      <div className="modal">
        <h1>Invalid Input</h1>
        <p>{props.error}</p>
        <button onClick={props.onToggleError}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
