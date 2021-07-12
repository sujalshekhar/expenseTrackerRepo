import React , { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const [check, setCheck] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setCheck(false);

    }

    const onChangeHandler = () => {
        setCheck(false);
    }


    const checkHandler = () => {
        setCheck(true);
    }

    if(!check) {
        return (
            <div className="new-expense">
                <button onClick={checkHandler} >Add Expense</button>
            </div>
        )
    }

    return (
        <div className="new-expense">
            <ExpenseForm onCheck={onChangeHandler} onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
