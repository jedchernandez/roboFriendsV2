import React from "react";
import { Context } from "../../store/Provider";
import "./SearchFilter.css";

const NameSearch = () => {
  const { onNameSearch } = React.useContext(Context);
  return (
    <section className="fieldbox">
      <input
        data-testid="name-search"
        className="field"
        type="search"
        placeholder="Search by name"
        onChange={onNameSearch}
      />
    </section>
  );
};

export default NameSearch;
