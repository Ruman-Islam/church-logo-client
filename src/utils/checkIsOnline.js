const checkIsOnline = (onlineUsers, userId) => {
  let isTrue = false;

  if (onlineUsers.length) {
    const isExists = onlineUsers.find((user) => user?.userId === userId);
    isTrue = isExists ? true : false;
  }

  return isTrue;
};

export default checkIsOnline;
