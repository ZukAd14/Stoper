import styles from './Timer.module.scss';





    const Timer = ({ time }) => {
        const formatTime = milliseconds => {
            const seconds = Math.floor((milliseconds / 1000) % 60);
            const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
            const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

            return [
                hours.toString().padStart(2, "0"),
                minutes.toString().padStart(2, "0"),
                seconds.toString().padStart(2, "0"),
                milliseconds.toString().padStart(1, "0")
            ].join(":");
            
        };

        return (
            <div >
                {formatTime(time)}
            </div>
        );
    };




export default Timer;