import { skipToken } from "@reduxjs/toolkit/query/react";
import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import newMessageSound from "../../assets/sounds/chat-sound.mp3";
import { useGetUnreadMessagesQuery } from "../../services/features/chat/chatApi";
import {
  addMessage,
  setAdminsAndClientsOnlineList,
  setUnreadMessages,
} from "../../services/features/chat/chatSlice";
import { useGetSystemConfigQuery } from "../../services/features/system/systemApi";
import { setSystemConfiguration } from "../../services/features/system/systemSlice";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { socket } from "../../socket";
import { getChatNotificationSound } from "../../utils/getNotificationSound";

const LoadInitialData = () => {
  const dispatch = useAppDispatch();
  const {
    auth: { user },
    chat: { currentConversationId },
  } = useAppSelector((state) => state);

  const { data, isLoading } = useGetSystemConfigQuery();

  const { data: unreadMessagesData } = useGetUnreadMessagesQuery(
    user
      ? {
          "receiver.userId": user?.userId,
          messageType: "client",
        }
      : skipToken
  );

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
      if (!currentConversationId && res?.sender?.userId !== user?.userId) {
        getChatNotificationSound(newMessageSound);
      }

      dispatch(addMessage(res));
    },
    [currentConversationId, dispatch, user?.userId]
  );

  useEffect(() => {
    socket.connect();
    socket.on("adminClientMsgTransfer", handleAddMessage);
    socket.on(
      "getAdminsAndClientsOnlineList",
      handleSetAdminsAndClientsOnlineList
    );

    if (user) {
      handleSetUnreadMessages(unreadMessagesData?.data || []);
    }

    handleSetSystemConfiguration({ ...data?.data, isLoading });

    return () => {
      socket.off("adminClientMsgTransfer");
      socket.off("getAdminsAndClientsOnlineList");
    };
  }, [
    user,
    isLoading,
    data?.data,
    unreadMessagesData?.data,
    handleAddMessage,
    handleSetAdminsAndClientsOnlineList,
    handleSetSystemConfiguration,
    handleSetUnreadMessages,
  ]);

  return <Outlet />;
};

export default LoadInitialData;
