
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else if (onComplete) {
      onComplete();
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
      <div className="countdown-item w-16 sm:w-20">
        <span className="text-2xl sm:text-3xl font-bold font-montserrat text-ai-gold">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-xs uppercase opacity-80">Dias</span>
      </div>
      <div className="countdown-item w-16 sm:w-20">
        <span className="text-2xl sm:text-3xl font-bold font-montserrat text-ai-gold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs uppercase opacity-80">Horas</span>
      </div>
      <div className="countdown-item w-16 sm:w-20">
        <span className="text-2xl sm:text-3xl font-bold font-montserrat text-ai-gold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs uppercase opacity-80">Min</span>
      </div>
      <div className="countdown-item w-16 sm:w-20">
        <span className="text-2xl sm:text-3xl font-bold font-montserrat text-ai-gold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs uppercase opacity-80">Seg</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
