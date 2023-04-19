import { useEffect, useState } from 'react';
import Timer from './components/Timer/Timer';
import styles from './styles/app.module.scss';


const App = () => {

  const [time, setTime] = useState(0);
  const [working, setWorking] = useState(false);
  
  useEffect(() => {
    let interval;
    if (working) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    } else if (!working) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [working]);

 
  return (
    <div className={styles.container}>
      <Timer times={ time } />
      <button className={styles.button} onClick={() => setWorking(true)}>Start</button>
      <button className={styles.button} onClick={() => setWorking(false)}>Stop</button>
      <button className={styles.button} onClick={() => setTime(0)}>Reset</button>
      
    </div>
 );
}

export default App;
