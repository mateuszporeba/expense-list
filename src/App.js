import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: "Car Insurance",
    amount: 294.68,
    date: new Date(2021, 9, 29)
  },
  {
    id: '2',
    title: "Toilet papper",
    amount: 22.68,
    date: new Date(2021, 7, 29)
  },
  {
    id: '3',
    title: "Pencil",
    amount: 2.68,
    date: new Date(2021, 5, 29)
  },
  {
    id: '4',
    title: "backpack",
    amount: 48.68,
    date: new Date(2021, 6, 13)
  }
]


function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // use of UUID
  //<h1>{v4()}</h1>


  return (
    <div className="App">
      Get started

      <p>This is also visible</p>

      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
