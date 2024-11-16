import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken.js";
import { useAppSelector } from "../../services/hook.js";
import { socket } from "../../socket.js";
import CrossLoader from "../common/CrossLoader/index.jsx";

const PersistLogin = () => {
  const refresh = useRefreshToken();
  const { auth } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  const activityTimeoutRef = useRef(null);

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
    if (auth?.user) {
      const resetIdleTimer = () => {
        // Clear any previous timeout
        if (activityTimeoutRef.current) {
          clearTimeout(activityTimeoutRef.current);
        }
        if (isIdle) {
          socket.emit(
            "adminsAndClientsActivity",
            auth.user.userId,
            auth.user.role
          );
          setIsIdle(false);
        }

        // Set a new idle timeout
        activityTimeoutRef.current = setTimeout(() => {
          setIsIdle(true);
        }, 3000); // Set idle after 30 seconds of inactivity
      };

      // Track mouse and keyboard activity
      window.addEventListener("mousemove", resetIdleTimer);
      window.addEventListener("keydown", resetIdleTimer);

      // Clear event listeners and timeouts on component unmount
      return () => {
        if (activityTimeoutRef.current) {
          clearTimeout(activityTimeoutRef.current);
        }
        window.removeEventListener("mousemove", resetIdleTimer);
        window.removeEventListener("keydown", resetIdleTimer);
      };
    }
  }, [auth?.user, isIdle]);

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

  return <>{isLoading ? <CrossLoader /> : <Outlet />}</>;
};

export default PersistLogin;
