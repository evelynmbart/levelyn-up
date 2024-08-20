import './App.css';
import './components/TopComp/TopComp.css'
import { NavBar } from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
import { TopComp } from './components/TopComp/TopComp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='screen'>
        <TopComp />
      </div>
    </div>
  );
}

export default App;
