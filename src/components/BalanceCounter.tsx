
import React, { useEffect, useState } from 'react';

interface BalanceCounterProps {
  balance: number;
  isAnimating: boolean;
}

const BalanceCounter = ({ balance, isAnimating }: BalanceCounterProps) => {
  const [displayBalance, setDisplayBalance] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      const duration = 800;
      const startTime = Date.now();
      const startBalance = displayBalance;
      const endBalance = balance;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentBalance = startBalance + (endBalance - startBalance) * easeOutQuart;
        
        setDisplayBalance(currentBalance);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setDisplayBalance(balance);
    }
  }, [balance, isAnimating]);

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50 max-w-[120px] md:max-w-none">
      <div className={`bg-gradient-to-r from-hot-pink to-pink-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg border-2 border-white ${isAnimating ? 'animate-bounce-money animate-pulse-pink' : ''}`}>
        <div className="text-center">
          <div className="text-[10px] md:text-xs font-semibold opacity-90">Desconto</div>
          <div className="text-sm md:text-xl font-bold font-rounded">
            R$ {displayBalance.toFixed(2).replace('.', ',')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCounter;
