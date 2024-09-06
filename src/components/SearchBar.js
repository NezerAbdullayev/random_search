import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }
  const handleChange=(e) => setTerm(e.target.value)

  return (
    <div className="search_bar">
     <label>Enter Search Term</label>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
