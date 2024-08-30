const startCountdown = (endDate, setTimer) => {
  const countdown = () => {
    const now = new Date().getTime();
    const targetDate = new Date(endDate).getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimer("Time's up!");
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  countdown();
  const interval = setInterval(countdown, 1000);

  return () => clearInterval(interval);
};

export default startCountdown;
