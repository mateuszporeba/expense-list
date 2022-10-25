import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem(props) {

    const expenseDate = new Date(2021, 9, 29);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'></div>
            <div>
                <h2>{props.title}</h2>
                </div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}
