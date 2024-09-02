const checkIsOnline = (onlineUsers, userId) => {
  const isExists = onlineUsers.find((user) => user?.userId === userId);

  return isExists ? true : false;
};

export default checkIsOnline;
