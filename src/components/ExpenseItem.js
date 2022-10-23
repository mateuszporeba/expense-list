import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {

    const expenseDate = new Date(2021, 9, 29);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'></div>
            <div><h2>{expenseTitle}</h2></div>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
        
    )
}
