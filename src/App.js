//import './App.css';
import Expenses from './components/Expenses/Expenses';
import uuid from "react-uuid";
import { v4 } from 'uuid';

import NewExpense from './components/Expenses/NewExpense/NewExpense';


function App() {

  const expenses = [
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

  // use of UUID
  //<h1>{v4()}</h1>



  return (
    <div className="App">
      Get started

      <p>This is also visible</p>

      <div>
        <NewExpense />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
