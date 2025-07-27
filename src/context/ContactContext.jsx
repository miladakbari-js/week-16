import { createContext, useReducer, useContext, useEffect } from "react";
import { contactReducer, initialState } from "./contactReducer";
import { getContacts } from "../services/contactService";

export const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    // const data = localStorage.getItem("boto_contacts");
    // if (data !== null) {
    //   dispatch({ type: "SET_CONTACTS", payload: JSON.parse(data) });
    // }
    getContacts().then((data) => {
      dispatch({ type: "SET_CONTACTS", payload: data });
    });
  }, []);
  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
