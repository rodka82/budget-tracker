import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-center">
      {props.name}
      <div>
        <span className="bbadge badge-primary badge-pill mt-3">
          ${props.cost}
        </span>
        <TiDelete sice="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
