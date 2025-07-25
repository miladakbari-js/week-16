import { useContactContext } from "../context/ContactContext";
import styles from "./ContactsList.module.css"
import SearchBox from "./SearchBox";
import ContactCard from "./ContactCard";

function ContactsList() {
  const { state, dispatch } = useContactContext();
  const { contacts } = state;
 
  const deleteAllHandler = () => {
    dispatch({ type: "TOGGLE_MODAL" });
    dispatch({ type: "SET_DELETE_ALL_MODAL", payload: true }); 
  };

  return (
    <div className={styles.container}>
      {!!contacts.length && (
        <div className={styles.control}>
          <button onClick={deleteAllHandler} className={styles.deletebutton}>
            Delete All
          </button>
          <SearchBox />
        </div>
      )}
      {!!contacts.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                data={contact}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Contact Yet !</p>
      )}
    </div>
  );
}

export default ContactsList;
