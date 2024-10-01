import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { env } from "../config/env";
import { useTrackingMutation } from "../services/features/auth/authApi";

const useTracking = () => {
  const { pathname } = useLocation();

  const [tracking] = useTrackingMutation();

  useEffect(() => {
    fetch(env.ip_url)
      .then((response) => response.json())
      .then(async (data) => {
        const newData = {
          pathname,
          data,
        };

        await tracking({ data: newData });
      })
      .catch((error) => {
        console.error("Error fetching user location:", error);
      });
  }, []);
};

export default useTracking;
