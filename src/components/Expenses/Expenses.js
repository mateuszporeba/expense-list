import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import { v4 } from 'uuid'

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={v4().toString()}
                    />
                ))}




            </Card>
        </div>
    )
}
// {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={v4().toString()}/>)}
/* <ExpenseItem
title={props.items[0].title}
amount={props.items[0].amount}
date={props.items[0].date}
/>
<ExpenseItem
title={props.items[1].title}
amount={props.items[1].amount}
date={props.items[1].date}
/>
<ExpenseItem
title={props.items[2].title}
amount={props.items[2].amount}
date={props.items[2].date}
/>
<ExpenseItem
title={props.items[3].title}
amount={props.items[3].amount}
date={props.items[3].date}
/> */