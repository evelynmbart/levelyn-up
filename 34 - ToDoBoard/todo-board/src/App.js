import './App.css';
import { useState, useEffect } from 'react';
import Board from './components/Board';
import Input from './components/Input';

export default function App() {
  const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem('taskList')) || []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="App">
      <h1>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className='list-of-tasks'>
        {taskList.map((task, index) =>
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
  );
}

