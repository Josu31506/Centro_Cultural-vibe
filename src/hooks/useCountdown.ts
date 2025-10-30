import { useEffect, useState } from 'react';

const formatTime = (distance: number) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const parts = [
    days > 0 ? `${days}D` : null,
    `${hours.toString().padStart(2, '0')}H`,
    `${minutes.toString().padStart(2, '0')}M`,
    `${seconds.toString().padStart(2, '0')}S`
  ].filter(Boolean);

  return parts.join('');
};

const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const eventDate = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft('¡Ya comenzó!');
        return;
      }

      setTimeLeft(formatTime(distance));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;
