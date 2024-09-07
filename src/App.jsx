import AOS from "aos";
import { useCallback, useEffect } from "react";
import useTracking from "./hooks/useTracking";
import Routers from "./Routers";
import {
  addMessage,
  setOnlineUsers,
  setUnreadMessages,
} from "./services/features/chat/chatSlice";
import { useAppDispatch } from "./services/hook.js";
import { socket } from "./socket";

AOS.init({
  once: true,
});

function App() {
  useTracking();
  const dispatch = useAppDispatch();

  const handleSetUnreadMessages = useCallback(
    (res) => {
      dispatch(setUnreadMessages(res));
    },
    [dispatch]
  );

  const handleSetOnlineUsers = useCallback(
    (res) => {
      dispatch(setOnlineUsers(res));
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
    socket.on("getMessage", handleAddMessage);
    socket.on("getOnlineUsers", handleSetOnlineUsers);
    socket.on("getUnreadMessages", handleSetUnreadMessages);

    return () => {
      socket.off("getMessage");
      socket.off("getOnlineUsers");
      socket.off("getUnreadMessages");
    };
  }, [handleSetOnlineUsers, handleAddMessage, handleSetUnreadMessages]);

  return <Routers />;
}

export default App;
