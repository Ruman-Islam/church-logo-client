import { useEffect } from "react";
import {
  setAuth,
} from "../services/features/auth/authSlice";
import {
  useGetRefreshTokenMutation,
} from "../services/features/auth/authApi.js";
import { useAppDispatch } from "../services/hook";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const { token } = JSON.parse(localStorage.getItem("auth")) || {};
  const [getRefreshToken, { data }] = useGetRefreshTokenMutation();

  const refresh = async () => {
    const options = {
      data: { token },
    };
    await getRefreshToken(options);
  };

  useEffect(() => {
    if (data) {
      dispatch(setAuth(data.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return refresh;
};

export default useRefreshToken;
