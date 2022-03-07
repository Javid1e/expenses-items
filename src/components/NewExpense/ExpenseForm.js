import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  //const [userInput, setUserInput] = useState({
  // enteredTitle: "",
  // enteredAmount: "",
  // enteredDate: "",
  //});
  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidTitle(true);
    }
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});
    //setUserInput((prevState)=>{
    //    return ({...prevState,enteredTitle:: event.target.value});
    //});
  };
  const amountChangeHandler = (event) => {
    if (event.target.value > 0) {
      setIsValidAmount(true);
    }
    setEnteredAmount(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //     return({...prevState, enteredAmount: event.target.value});
    // });
  };
  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidDate(true);
    }
    setEnteredDate(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
    //setUserInput((prevState)=>{
    //    return({...prevState,enteredDate: event.target.value});
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValidTitle(false);
    setIsValidDate(false);
    setIsValidAmount(false);
    if (enteredTitle.trim().length === 0) {
      return;
    }
    if (enteredDate.trim().length === 0) {
      return;
    }
    if (enteredAmount.trim().length === 0) {
      return;
    }
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={`${styles["new-expense__control"]} ${!isValidTitle && styles.invalid}`}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className={`${styles["new-expense__control"]} ${!isValidAmount && styles.invalid}`}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className={`${styles["new-expense__control"]} ${!isValidDate && styles.invalid}`}>
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
