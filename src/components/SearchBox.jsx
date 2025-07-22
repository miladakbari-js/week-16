import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { useContactContext } from "../context/ContactContext";

function SearchBox() {
  const [search, setSearch] = useState("");

  const { state, dispatch } = useContactContext();
  const { clearSearch } = state;

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const searchHandler = () => {
    if (!search.trim()) {
      dispatch({
        type: "SHOW_ALERT_MODAL",
        payload: "Please enter your search value",
      });
      dispatch({ type: "RESET_CONTACTS" });
      setTimeout(() => {
        dispatch({ type: "HIDE_ALERT_MODAL" });
      }, 2000);
      return;
    }

    dispatch({
      type: "SEARCH_CONTACTS",
      payload: search,
    });
  };

  useEffect(() => {
    if (clearSearch) {
      setSearch("");
      dispatch({ type: "SET_CLEAR_SEARCH", payload: false });
    }
  }, [clearSearch]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search contacts..."
        value={search}
        onChange={changeHandler}
      />
      <button className={styles.searchbutton} onClick={searchHandler}>
        search
      </button>
    </div>
  );
}

export default SearchBox;
