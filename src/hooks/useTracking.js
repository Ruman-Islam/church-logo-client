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
          ip: data?.ip,
          city: data?.city,
          region: data?.region,
          regionType: data?.region_type,
          countryName: data?.country_name,
          continentName: data?.continent_name,
          latitude: data?.latitude,
          longitude: data?.longitude,
          postal: data?.postal,
        };

        await tracking({ data: newData });
      })
      .catch((error) => {
        console.error("Error fetching user location:", error);
      });
  }, [pathname, tracking]);
};

export default useTracking;
