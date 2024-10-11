const checkIsOnline = (adminsAndClientsOnlineList = []) => {
  const doesAdminsOnline = adminsAndClientsOnlineList.filter(
    (u) => u.role === "admin" || u.role === "super_admin"
  );

  return doesAdminsOnline.length > 0;
};

export default checkIsOnline;
