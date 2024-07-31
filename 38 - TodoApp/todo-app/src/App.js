import './App.css';
import './components/TodoItem/TodoItem.css'
import { TodoItem } from './components/TodoItem/TodoItem';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [userInputValue, setUserInputValue] = useState('');

  const handleUserInputChange = (e) => {
    setUserInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('iwasclicked')
    setTask([userInputValue, ...task]);
    setUserInputValue('');
  }

  const handleDelete = (i) => {
    const newTasks = [...task]
    newTasks.splice(i, 1)
    setTask(newTasks)
  }

  return (
    <div>
      <div className="navbar">
        Today's TO-DO's:
        <form onSubmit={handleSubmit}>
          <input
            className="userInput"
            type="text"
            value={userInputValue}
            onChange={handleUserInputChange}
            placeholder="Laundry">
          </input>
          <button type="submit" className='submitButton'>Add</button>
        </form>
      </div>
      <div className='board'>
        {task.map((task, index) => {
          return <TodoItem key={index} item={task} handleDelete={() => handleDelete(index)} />
        })}
      </div>
    </div>
  );
}

export default App;
