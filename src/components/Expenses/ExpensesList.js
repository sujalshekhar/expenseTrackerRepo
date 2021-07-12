import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {

    if(props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">No items found !</h2>
        )
    }

    else  {return (
        <ul className="expenses-list">
            {props.items.map(item => {
            return (
            <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
            />
            )
        })}
        </ul>
    )}
}

export default ExpensesList
