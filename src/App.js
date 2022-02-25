import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES = [
  { id: "e1", title: "porshe", amount: 3000, date: new Date(2020, 1, 15) },
  { id: "e2", title: "frari", amount: 2000, date: new Date(2020, 1, 15) },
  { id: "e3", title: "benz", amount: 400, date: new Date(2020, 1, 15) },
  { id: "e4", title: "ford", amount: 4000, date: new Date(2020, 1, 15) },
  { id: "e5", title: "irankhodre", amount: 1, date: new Date(2021, 1, 15) },
];
const App = () => {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=expense=>{
    setExpenses((prevExpenses)=>{
     return [expense,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
