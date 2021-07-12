import { useState, useRef, useEffect } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Laptop",
    amount: 50000,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 60000, 
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "New Car",
    amount: 1000000,
    date: new Date(2020, 1, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 5000,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Python Udemy Course",
    amount: 500,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e6",
    title: "New Graphical Tablet",
    amount: 5000,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e7",
    title: "Home Renovation",
    amount: 200000,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e8",
    title: "New Phone",
    amount: 20000,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenseArray, setExpenseArray] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenseArray((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseArray} />
      <p>© Sujal Shekhar {new Date().getFullYear()} </p>
    </div>
  );
}

export default App;
