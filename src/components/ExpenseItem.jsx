import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // console.log("item", props.date);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2 className="expense-item ">{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
