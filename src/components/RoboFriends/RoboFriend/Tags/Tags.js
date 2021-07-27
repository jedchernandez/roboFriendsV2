import React from "react";
import { Context } from "../../../../store/Provider";
import "./Tags.css";

// displayed tags
// adding a tag

const Tags = ({ id: roboFriendId, tags }) => {
  const { onTagAdd } = React.useContext(Context);

  return (
    <aside className="tag-container">
      <ul className="unordered">
        {tags?.map((tag, index) => (
          <li
            data-testid={`tag-item-${roboFriendId}`}
            key={index}
            className="list"
          >
            <span>{tag}</span>
          </li>
        ))}
      </ul>
      <input
        data-testid={`add-tag-field-${roboFriendId}`}
        onKeyUp={(e) => onTagAdd(e, roboFriendId)}
        className="tagInput"
        type="text"
        placeholder="Add a tag"
      />
    </aside>
  );
};

export default Tags;
