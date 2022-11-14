import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import { v4 } from 'uuid';

export default function NewExpense(props) {

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
        ...enteredExpenseData,
        id: v4().toString()
        //id: Math.random().toString()
    };
    //console.log(expenseData.id);
    // console.log('NewExpense expense Data: ' + expenseData.date);
    // console.log('NewExpense expense Data: ' + expenseData.title);
    // console.log('NewExpense expense Data: ' + expenseData[1]);
    props.onAddExpense(expenseData);
};

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
