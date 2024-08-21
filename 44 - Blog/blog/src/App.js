import './App.css';
import { Create } from './components/Create';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> {/* makes sure each path is just showing once, not each one all the time. good practice to put routes inside of switches */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
