import React from "react";

const ExpenseItem = (props) => {
  return <li className="list-group-item">{props.name}</li>;
};

export default ExpenseItem;
