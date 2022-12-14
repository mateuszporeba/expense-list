import React from 'react'
import ExpenseItem from './ExpenseItem';
import { v4 } from 'uuid'
import './ExpensesList.css'

export default function ExpensesList(props) {

    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }


    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={v4().toString()}
                />
            ))}
        </ul>
    )
}
