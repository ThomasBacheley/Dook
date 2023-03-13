import React, { useState } from "react";

const SearchbookForm = (props) => {
  const initialFormState = "";
  const [research, setResearch] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { value } = event.target; // recuperer les valeurs de l'input
    setResearch(value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!research) return;
        props.editResearch(research); // et c'est la qu'on add notre 'research' en quelque sorte
        setResearch("");
      }}
    >
      <label>
        <h3>Book Title : </h3>
      </label>
      <input
        type="text"
        name="booktitle"
        value={research}
        onChange={handleInputChange}
      />
      <button className="btn p-0 fs-1-5em">🔎</button>
    </form>
  );
};

export default SearchbookForm;
