import React from "react";
import { Context } from "../../store/Provider";
import "./SearchFilter.css";

const TagSearch = () => {
  const { onTagSearch } = React.useContext(Context);

  return (
    <section className="tagfieldbox">
      <input
        data-testid="tag-search"
        className="field"
        type="search"
        placeholder="Search by tag"
        onChange={onTagSearch}
      />
    </section>
  );
};

export default TagSearch;
