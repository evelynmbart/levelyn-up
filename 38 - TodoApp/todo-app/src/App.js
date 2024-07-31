import './App.css';
import './components/TodoItem/TodoItem.css'
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {
  return (
    <div>
      <div className="navbar">
        Today's TO-DO's:
        <input className="userInput" type="text" placeholder="Laundry" />
      </div>
      <div className='board'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
