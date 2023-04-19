import styles from './Timer.module.scss';





    const Timer = ({ times }) => {
        const formatTime = () => {
            const milliseconds = times % 100;
            const seconds = Math.floor((times % 6000) / 100);
            const minutes = Math.floor((times % 360000) / 6000);
            const hours = Math.floor(times / 360000);

            return [
                hours.toString().padStart(2, "0"),
                minutes.toString().padStart(2, "0"),
                seconds.toString().padStart(2, "0"),
                milliseconds.toString().padStart(1, "0")
            ].join(":");
            
        };

        return (
            <div className={styles.timer}>
                {formatTime(times)}
            </div>
        );
    };




export default Timer;