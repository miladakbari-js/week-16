import { createContext, useReducer, useContext } from "react";
import { contactReducer, initialState } from "./contactReducer";

export const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
