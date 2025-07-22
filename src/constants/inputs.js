const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    regex: /^[A-Za-z\s]{3,}$/,
    errorMessage: "Please Enter name at least 3 English letters",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    regex: /^[A-Za-z\s]{3,}$/,
    errorMessage: "Please Enter lastName at least 3 English letters",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
  },
  {
    name: "job",
    type: "text",
    placeholder: "Job",
    regex: /^[A-Za-z\s]{2,}$/,
    errorMessage: "Please Enter valid job title",
  },
  {
    name: "phone",
    type: "number",
    placeholder: "Phone Number",
    regex: /^09\d{9}$/,
    errorMessage: "Please enter a valid Iranian phone number",
  },
];

export default inputs;
