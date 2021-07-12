import React , { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const onChangeHandler = () => props.onCheck();
    

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} placeholder="Enter Title"/>
                </div>
                <div className="new-expense__control">
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} placeholder="Enter Amount" />
                </div>
                <div className="new-expense__control">
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} placeholder="Date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onChangeHandler} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
