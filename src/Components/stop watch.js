import React from "react";

function Stopwatch() {
  var [sec, setSec] = React.useState(0);
  var [min, setmin] = React.useState(0);
  var [hr, sethr] = React.useState(0);
  var [start, setpos] = React.useState(false);
  var interval = React.useRef(null);

  React.useEffect(() => {
    if (start === true) {
      interval.current = setInterval(() => {
        setSec((prevsec) => {
          if (prevsec === 59) {
            setmin((prevmin) => {
              if (prevmin === 59) {
                sethr(hr + 1);
                return 0;
              }
              return prevmin + 1;
            });
            return 0;
          }
          return prevsec + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval.current);
      return;
    }
  }, [start]);

  function startClock() {
    setpos(!start);
  }

  function format(time) {
    if (time < 10) return `0${time}`;
    else return time;
  }

  function reset() {
    setSec(0);
    sethr(0);
    setmin(0);
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch-time">
        {format(hr)} : {format(min)} : {format(sec)}
      </div>
      <div className="btn-stopwatch">
        <button className="stopwatch-btn" onClick={startClock}>
          {start ? "STOP" : "START"}
        </button>
        <button className="stopwatch-btn" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
