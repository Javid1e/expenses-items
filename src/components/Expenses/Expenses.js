import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [fiteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fiteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fiteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
