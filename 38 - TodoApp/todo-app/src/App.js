import './App.css';
import './components/TodoItem/TodoItem.css'
import { TodoItem } from './components/TodoItem/TodoItem';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <div>
      <div className="navbar">
        Today's TO-DO's:
        <input className="userInput" type="text" placeholder="Laundry" />
        <button type='submit' className='submitButton'>Submit</button>
      </div>
      <div className='board'>
        {/* {task.map((task) => {
          return <TodoItem item={task} />
        })} */}
      </div>
    </div>
  );
}

export default App;
