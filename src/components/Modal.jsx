import { useContactContext } from "../context/ContactContext";
import styles from "./Modal.module.css";

function Modal({ onConfirm, onCancel, message }) {
  const { state } = useContactContext();
  const { alertMessage } = state;
  return (
    <div className={styles.wall} onClick={onCancel}>
      <div className={alertMessage ? styles.alert : styles.container} onClick={(e) => e.stopPropagation()}>
        <div>
          <p>{message}</p>
          <div className={styles.buttons}>
            {!alertMessage && (
              <>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>Cancel</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
