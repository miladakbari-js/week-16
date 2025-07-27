import { useContactContext } from "./context/ContactContext";
import styles from "./App.module.css";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Modal from "./components/Modal";
import { deleteContact } from "./services/contactService";

function App() {
  const { state, dispatch } = useContactContext();
  const {
    showForm,
    showModal,
    deleteAllModal,
    contacts,
    targetId,
    alertMessage,
  } = state;

  const confirmDelete =async () => {
    await deleteContact(targetId);
    dispatch({
      type: "DELETE_CONTACT",
      payload: targetId,
    });
  };

  const confirmDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_CONTACT" });
  };

  const cancelDelete = () => {
    dispatch({ type: "CLEAR_TARGET" });
  };

  return (
    <main className={styles.main}>
      <div className={styles.start}>
        <div>
          <h1>Welcome to Task Week 16</h1>
          <p>For start please click on 'New Contact'</p>
        </div>
        <button
          onClick={() => dispatch({ type: "TOGGLE_FORM" })}
          className={showForm ? styles.close : styles.new}
        >
          {showForm ? "Close Form" : "New Contact"}
        </button>
      </div>

      {showForm && <Form />}

      <ContactsList />

      {(showModal || deleteAllModal) && (
        <Modal
          onConfirm={
            alertMessage
              ? null
              : deleteAllModal
              ? confirmDeleteAll
              : confirmDelete
          }
          onCancel={cancelDelete}
          message={
            alertMessage ||
            (deleteAllModal ? "Delete All contacts?" : "Delete This contact?")
          }
        />
      )}
    </main>
  );
}

export default App;
