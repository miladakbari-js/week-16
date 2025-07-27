const BASE_URL = "http://localhost:3001/contacts";

const getContacts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

const addContact = async (contact) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
};

const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    console.log(res.status, "server Error");
  }
};

const updateContact = async (contact) => {
  const res = await fetch(`${BASE_URL}/${contact.id}`, {
    method: "PUT",
    headers: { ContentType: "application/json" },
    body: JSON.stringify(contact)
  });
  return res.json()
};
export { getContacts, addContact, deleteContact , updateContact };
