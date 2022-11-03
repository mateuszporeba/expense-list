import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


export default function NewExpense(props) {

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    console.log('Działa');
    console.log(expenseData.id);
    console.log(expenseData);
    props.onAddExpense(expenseData);
};

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
