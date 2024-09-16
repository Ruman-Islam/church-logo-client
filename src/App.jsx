import AOS from "aos";
import { Fragment, useCallback, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import JumpToTopBtn from "./components/common/JumpToTopBtn";
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

  return (
    <Fragment>
      <Routers />
      <JumpToTopBtn />
      <Toaster position="bottom-center" />
    </Fragment>
  );
}

export default App;
