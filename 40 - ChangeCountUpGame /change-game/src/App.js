import './App.css';
import { useState } from 'react';
import { randomTarget } from './utils/randomTarget';
import { formatNumberAsMoney } from './utils/formatter';

function App(number) {
  const [userTotal, setUserTotal] = useState(0);
  const [randomTotal, setRandomTotal] = useState(randomTarget());

  const handleQuarterClick = () => {
    // user-total needs to be updated per every coin click
    setUserTotal(userTotal + .25)
    setRandomTotal(randomTotal)
  }

  const handleDimeClick = () => {
    setUserTotal(userTotal + .10)
    setRandomTotal(randomTotal)
  }
  const handleNickelClick = () => {
    setUserTotal(userTotal + .05)
    setRandomTotal(randomTotal)
  }
  const handlePennyClick = () => {
    setUserTotal(userTotal + .01)
    setRandomTotal(randomTotal)
  }



  return (
    <div className="browser">
      <div className="navbar">Change Maker</div>
      <div className="game-area">
        <div className="target-total">
          <h3>Target Amount: {formatNumberAsMoney(randomTotal)}</h3>
        </div>
        <div className="images">
          <img onClick={() => handleQuarterClick(number)} id="quarter" src="https://t4.ftcdn.net/jpg/05/96/06/11/360_F_596061146_YLWhFwxPF57JneJxsUePzC8YVLnroYgh.jpg" />
          <img onClick={handleDimeClick} id="dime" src="https://media.istockphoto.com/id/136216768/photo/us-dime.jpg?s=612x612&w=0&k=20&c=VoGx1QwKqYdaSuYmc3Qquw2X2Car3AJkp1jaGJxDFG8=" />
          <img onClick={handleNickelClick} id="nickel" src="https://smd-cms.nasa.gov/wp-content/uploads/2023/09/red_nickel_480x320_kids_activities.jpg" />
          <img onClick={handlePennyClick} id="penny" src="https://www.usmint.gov/wordpress/wp-content/uploads/2017/01/1959-lincoln-penny-obverse.jpg" />
        </div>
        <div className="user-total">Your Total: {formatNumberAsMoney(userTotal)}</div>
      </div>
    </div>
  );
}

export default App;
