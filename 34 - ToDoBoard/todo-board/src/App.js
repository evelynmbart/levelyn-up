import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import Input from './components/Input';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <h1>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
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

