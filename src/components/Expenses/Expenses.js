import React , { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [year, setYear] = useState("2020");


    const onGetDate = (filteredDate) => {
        setYear(filteredDate);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == year);


    return (
        
            
            <Card className="expenses">
                <ExpensesFilter filterYear={year} onFilteredDate={onGetDate} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        
    )
}

export default Expenses;
