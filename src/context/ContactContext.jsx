import { createContext, useReducer, useContext, useEffect } from "react";
import { contactReducer, initialState } from "./contactReducer";

export const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    const data = localStorage.getItem("boto_contacts");
    if (data !== null) {
      dispatch({ type: "SET_CONTACTS", payload: JSON.parse(data) });
    }
  }, []);
  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
