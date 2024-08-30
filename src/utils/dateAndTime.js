const dateAndTime = (givenDate) => {
  const dateObject = new Date(givenDate);

  const dateLocale = dateObject.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const date = new Date(dateLocale).toDateString();

  const time = dateObject.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return { date, time };
};

export default dateAndTime;
