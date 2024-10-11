import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken.js";
import { useAppSelector } from "../../services/hook.js";
import { socket } from "../../socket.js";
import Loader from "../common/Loader";

const PersistLogin = () => {
  const refresh = useRefreshToken();
  const { auth } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth?.user) {
      socket.emit(
        "addToAdminsAndClientsOnlineList",
        auth?.user?.userId,
        auth?.user?.role
      );
    }

    return () => {
      socket.off("addToAdminsAndClientsOnlineList");
    };
  }, [auth?.user]);

  useEffect(() => {
    // isMounted is using for no memory leak
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.token]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
