import styles from "./ContactCard.module.css";
import { useContactContext } from "../context/ContactContext";

function ContactCard({ data }) {
  const { state, dispatch } = useContactContext();
  const { contacts } = state;

   const editHandler = () => {
    const target = contacts.find((c) => c.id === data.id);
    dispatch({ type: "SET_EDITABLE_CONTACT", payload: target });
  };

  const deleteHandler = () => {
    dispatch({ type: "SET_TARGET_ID", payload: data.id });
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
<tr>
      <td>{data.name}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.job}</td>
      <td>{data.phone}</td>
      <td className={styles.status}>
        <button onClick={editHandler} className={styles.edit}>Edit</button>
        <button onClick={deleteHandler} className={styles.delete}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactCard;
