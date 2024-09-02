import AOS from "aos";
import { useEffect } from "react";
import Routers from "./Routers";
import { setOnlineUsers } from "./services/features/auth/authSlice";
import { useAppDispatch } from "./services/hook.js";
import { socket } from "./socket";

AOS.init({
  once: true,
});

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.connect();
    socket.on("getOnlineUsers", (data) => dispatch(setOnlineUsers(data)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Routers />;
}

export default App;
