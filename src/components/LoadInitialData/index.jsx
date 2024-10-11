import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  addMessage,
  setAdminsAndClientsOnlineList,
  setUnreadMessages,
} from "../../services/features/chat/chatSlice";
import { useGetSystemConfigQuery } from "../../services/features/system/systemApi";
import { setSystemConfiguration } from "../../services/features/system/systemSlice";
import { useAppDispatch } from "../../services/hook";
import { socket } from "../../socket";

const LoadInitialData = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetSystemConfigQuery();

  const handleSetSystemConfiguration = useCallback(
    (res) => {
      dispatch(setSystemConfiguration(res));
    },
    [dispatch]
  );

  const handleSetUnreadMessages = useCallback(
    (res) => {
      dispatch(setUnreadMessages(res));
    },
    [dispatch]
  );

  const handleSetAdminsAndClientsOnlineList = useCallback(
    (res) => {
      dispatch(setAdminsAndClientsOnlineList(res));
    },
    [dispatch]
  );

  const handleAddMessage = useCallback(
    (res) => {
      dispatch(addMessage(res));
    },
    [dispatch]
  );

  useEffect(() => {
    socket.connect();
    socket.on("adminClientMsgTransfer", handleAddMessage);
    socket.on(
      "getAdminsAndClientsOnlineList",
      handleSetAdminsAndClientsOnlineList
    );
    socket.on("getUnreadMessages", handleSetUnreadMessages);
    handleSetSystemConfiguration({ ...data?.data, isLoading });

    return () => {
      socket.off("adminClientMsgTransfer");
      socket.off("getAdminsAndClientsOnlineList");
      socket.off("getUnreadMessages");
    };
  }, [
    data?.data,
    isLoading,
    handleSetAdminsAndClientsOnlineList,
    handleAddMessage,
    handleSetUnreadMessages,
    handleSetSystemConfiguration,
  ]);

  return <Outlet />;
};

export default LoadInitialData;
