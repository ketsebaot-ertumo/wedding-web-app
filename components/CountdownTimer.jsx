'use client';
import React, { useEffect, useState } from 'react';

const targetDate = new Date('2025-06-08T11:00:00Z'); // EAT is UTC+3

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (targetDate - new Date() <= 0) {
    return <div className="text-center text-xl font-semibold text-green-600">🎉 Wedding Time! 🎉</div>;
  }

  return (
    <div className="text-center text-xl sm:text-2xl font-semibold text-rose-600 my-4">
      ⏳ Countdown to Our Wedding:<br />
      <div className="flex justify-center gap-4 mt-2 text-rose-500 font-mono">
        <div>{timeLeft.days}d</div>
        <div>{timeLeft.hours}h</div>
        <div>{timeLeft.minutes}m</div>
        <div>{timeLeft.seconds}s</div>
      </div>
    </div>
  );
}
