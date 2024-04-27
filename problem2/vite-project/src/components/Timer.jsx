import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
}

export default Timer;

// class component
// import React, { Component } from 'react';

// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       seconds: this.state.seconds + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

// export default Timer;

