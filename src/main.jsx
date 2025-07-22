import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import ContactProvider from "./context/ContactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactProvider>
      <Layout>
        <App />
      </Layout>
    </ContactProvider>
  </React.StrictMode>
);
