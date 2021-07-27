import "./RoboFriend.css";
import React from "react";
import { Context } from "../../../store/Provider";
export const ToggleIncomeButton = ({ id, handleClick, toggleState }) => {
  const { onUpdateToggleState } = React.useContext(Context);
  return (
    <section className="button-container">
      <button
        data-testid={`button-${id}`}
        id={id}
        onClick={() => onUpdateToggleState(id)}
        className="btn"
      >
        <i
          id={id}
          className={toggleState ? "fa fa-minus" : "fa fa-plus"}
          aria-hidden="true"
        ></i>
      </button>
    </section>
  );
};
