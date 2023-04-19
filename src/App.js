import { useState } from 'react';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';


const App = () => {

  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  return (
    <div>
      <Timer time={ time } />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
 );
}

export default App;
