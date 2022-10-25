import './App.css';
import ExpenseItem from './components/ExpenseItem';
import uuid from "react-uuid";
import { v4 } from 'uuid';


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
    }
  ]

  // use of UUID
  //<h1>{v4()}</h1>

  return (
    <div className="App">
      Get started

      <p>This is also visible</p>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
