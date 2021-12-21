import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "compras", cost: 50 },
    { id: 2, name: "transporte", cost: 50 },
    { id: 3, name: "escola", cost: 50 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
