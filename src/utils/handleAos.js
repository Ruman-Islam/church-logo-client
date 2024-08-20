export const handleAosDelay = (i) => {
  const baseDelay = 100; // 1000 milliseconds (1 second)
  const delay = i * baseDelay;

  return delay.toString(); // Return as a string to match the format
};
