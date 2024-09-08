import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTrackingMutation } from "../services/features/auth/authApi";

const useTracking = () => {
  const { pathname } = useLocation();

  const [tracking] = useTrackingMutation();

  useEffect(() => {
    fetch(
      "https://api.ipdata.co?api-key=3237d91128dc72fe1b19788966740c1da311e8d160aff29dfd5fcbe3"
    )
      .then((response) => response.json())
      .then(async (data) => {
        const newData = {
          pathname,
          user: data,
        };
        await tracking({ data: newData });
        console.log("User location:", data);
      })
      .catch((error) => {
        console.error("Error fetching user location:", error);
      });
  }, []);
};

export default useTracking;
