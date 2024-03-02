import React from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time">
      <div className="nowtime">
        <h2>{currentTime.toLocaleTimeString()}</h2>
      </div>
      <div className="date">
        <h2>{currentTime.toLocaleDateString()}</h2>
      </div>
    </div>
  );
};
export default Time;