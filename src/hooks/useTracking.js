import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { env } from "../config/env";
import { useTrackingMutation } from "../services/features/auth/authApi";

const useTracking = () => {
  const { pathname } = useLocation();

  const [tracking] = useTrackingMutation();

  const url = `https://api.ipdata.co?api-key=${env.ip_data_api_key}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        const newData = {
          pathname,
          ip: data?.ip || "",
          city: data?.city || "",
          region: data?.region || "",
          regionType: data?.region_type || "",
          countryName: data?.country_name || "",
          continentName: data?.continent_name || "",
          latitude: data?.latitude || 0,
          longitude: data?.longitude || 0,
          postal: data?.postal || "",
          callingCode: data?.calling_code || "",
          flag: data?.flag || "",
          currentTime: data?.time_zone?.current_time || "",
        };

        await tracking({ data: newData });
      })
      .catch((error) => {
        console.error("Error fetching user location:", error);
      });
  }, [pathname, tracking, url]);
};

export default useTracking;
