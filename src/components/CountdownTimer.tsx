
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) {
    return (
      <div className="text-center text-red-600 font-bold text-lg">
        ⏰ Oferta Expirada!
      </div>
    );
  }

  return (
    <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 text-center">
      <div className="text-red-700 font-semibold mb-2">
        ⏰ Oferta válida por tempo limitado!
      </div>
      <div className="text-3xl font-bold text-red-600">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="text-sm text-red-600 mt-1">
        minutos restantes
      </div>
    </div>
  );
};

export default CountdownTimer;
