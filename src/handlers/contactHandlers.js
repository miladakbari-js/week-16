export const createSearchHandler = ({ allContacts, setContacts, setClearSearch }) => {
  return (search) => {
    if (!search) {
      alert("Please enter your search value");
      setContacts(allContacts);
      return;
    }

    const filtered = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    if (filtered.length === 0) {
      alert("No result found!");
      return;
    }

    setContacts(filtered);
    setClearSearch(true);
  };
};