import { useEffect } from "react";
import {
  setAuth,
} from "../services/features/auth/authSlice";
import {
  useGetRefreshTokenMutation,
} from "../services/features/auth/authApi.js";
import { useAppDispatch } from "../services/hook";
import useCookie from "./useCookie";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const { handleGetCookie } = useCookie();
  const token = handleGetCookie();
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
