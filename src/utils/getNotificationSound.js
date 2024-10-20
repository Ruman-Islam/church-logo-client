const getChatNotificationSound = (newMessageSound) => {
  const sound = new Audio(newMessageSound);
  return sound.play();
};

export { getChatNotificationSound };
