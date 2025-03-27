import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set your target date here (YYYY, MM-1, DD, HH, MM, SS)
  const targetDate = new Date(2025, 3, 11, 10, 0, 0);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="relative">
          {/* Neon box */}
          <div className="w-24 h-24 flex items-center justify-center 
                          bg-[#1a002c] border-2 border-neon-purple rounded-lg
                          shadow-neon-purple shadow-lg p-4 mb-5">
            <span className="text-4xl font-bold text-white">
              {timeLeft[interval]}
            </span>
          </div>
          {/* Label */}
          <span className="text-lg mt-2 text-gray-300 uppercase">
            {interval}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center my-8">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;

