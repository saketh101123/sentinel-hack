
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(blinkInterval);
    };
  });

  const timeBoxes = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeBoxes.map((box, index) => (
        <div 
          key={index}
          className="glassmorphism border border-white/20 p-4 flex flex-col items-center min-w-[90px]"
        >
          <span className="text-3xl sm:text-4xl font-cyber font-bold">
            {String(box.value).padStart(2, '0')}
          </span>
          <span className="text-xs sm:text-sm mt-2 text-gray-400 font-cyber">
            {box.label}
          </span>
          {(index < timeBoxes.length - 1) && (
            <span className={`hidden sm:block absolute -right-2.5 text-2xl top-1/2 transform -translate-y-1/2 ${isBlinking ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
