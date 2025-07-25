const initialState = {
  contacts: [],
  allContacts: [],
  editableContact: null,
  targetId: null,
  showForm: false,
  showModal: false,
  deleteAllModal: false,
  clearSearch: false,
  alertMessage: null,
};
const updateLocalStorage = (data)=>{
  localStorage.setItem("boto_contacts" , JSON.stringify(data))
}
const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContacts = [...state.contacts, action.payload];
     updateLocalStorage(newContacts)
      return {
        ...state,
        contacts: newContacts,
        allContacts: newContacts,
      };

    case "DELETE_CONTACT":
      const filtredContacts = state.contacts.filter(
        (contact) => contact.id !== state.targetId
      );
      updateLocalStorage(filtredContacts)
      return {
        ...state,
        contacts: filtredContacts,
        allContacts: filtredContacts,
        targetId: null,
        showModal: false,
      };
    case "SET_EDITABLE_CONTACT":
      return {
        ...state,
        editableContact: action.payload,
        showForm: true,
      };
    case "UPDATE_CONTACT":
      const updatedContact = state.contacts.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      updateLocalStorage(updatedContact)
      return {
        ...state,
        contacts: updatedContact,
        allContacts: updatedContact,
        editableContact: null,
        showForm: false,
      };
    case "DELETE_ALL_CONTACT":
      updateLocalStorage([])
      return {
        ...state,
        contacts: [],
        allContacts: [],
        showModal: false,
        deleteAllModal: false,
      };
    case "TOGGLE_FORM":
      return {
        ...state,
        showForm: !state.showForm,
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "SET_TARGET_ID":
      return {
        ...state,
        targetId: action.payload,
      };
    case "CLEAR_TARGET":
      return {
        ...state,
        targetId: null,
        showModal: false,
        deleteAllModal: false,
      };
    case "SEARCH_CONTACTS":
      const filteredContacts = state.allContacts.filter((contact) => {
        const keyword = action.payload.toLowerCase().trim();
        return (
          contact.name.toLowerCase().includes(keyword) ||
          contact.lastName.toLowerCase().includes(keyword) ||
          contact.job.toLowerCase().includes(keyword) ||
          contact.email.toLowerCase().includes(keyword)
        );
      });
      if (filteredContacts.length === 0) {
        alert("No result found!");
        return { ...state };
      }
      return {
        ...state,
        contacts: filteredContacts,
        clearSearch: true,
      };
    case "RESET_CONTACTS":
      return {
        ...state,
        contacts: [...state.allContacts],
        clearSearch: true,
      };
    case "SET_CLEAR_SEARCH":
      return {
        ...state,
        clearSearch: action.payload,
      };
    case "SET_DELETE_ALL_MODAL":
      return {
        ...state,
        deleteAllModal: action.payload,
      };

    case "SHOW_ALERT_MODAL":
      return {
        ...state,
        alertMessage: action.payload,
        showModal: true,
        deleteAllModal: false,
      };
    case "HIDE_ALERT_MODAL":
      return {
        ...state,
        alertMessage: null,
        showModal: false,
      };

    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
        allContacts: action.payload,
      };
  }
};

export { contactReducer, initialState };
