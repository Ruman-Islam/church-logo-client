import AOS from "aos";
import { useCallback, useEffect } from "react";
import Routers from "./Routers";
import { addMessage, setOnlineUsers } from "./services/features/chat/chatSlice";
import { useAppDispatch } from "./services/hook.js";
import { socket } from "./socket";

AOS.init({
  once: true,
});

function App() {
  const dispatch = useAppDispatch();

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
    socket.on("getOnlineUsers", handleSetOnlineUsers);
    socket.on("getMessage", handleAddMessage);

    return () => {
      socket.off("getOnlineUsers");
      socket.off("getMessage");
    };
  }, [handleSetOnlineUsers, handleAddMessage]);

  return <Routers />;
}

export default App;
