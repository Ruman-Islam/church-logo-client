import { useEffect } from "react";
import { useGetRefreshTokenMutation } from "../services/features/auth/authApi.js";
import { setAuth } from "../services/features/auth/authSlice";
import { setConversationId } from "../services/features/chat/chatSlice";
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
      dispatch(setConversationId(data?.data?.user?.conversationId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return refresh;
};

export default useRefreshToken;
