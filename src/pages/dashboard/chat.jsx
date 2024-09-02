import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Layout from "../../components/common/Layout";
import useAutomaticScrollWithOffset from "../../hooks/useAutomaticScrollWithOffset";
import { useGetInboxQuery } from "../../services/features/chat/chatApi";
import { useGetOrderListQuery } from "../../services/features/order/orderApi";
import { useAppSelector } from "../../services/hook";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

export default function ChatScreen() {
  useAutomaticScrollWithOffset();

  const {
    auth: { user, onlineUsers },
  } = useAppSelector((state) => state);

  const query = {
    page: 1,
    limit: 100,
  };

  const { data: order, isFetching: orderFetching } =
    useGetOrderListQuery(query);
  const { data: inbox, isFetching: inboxFetching } = useGetInboxQuery(query);

  return (
    <Layout title="Chat">
      <Box id="chat" className="bg-section__bg_color h-full">
        {/* <SectionBanner heading="Welcome" desc="" /> */}
        <Box className="max-w-[1024px] w-full mx-auto px-4 py-5 lg:py-10">
          {orderFetching || inboxFetching ? (
            <Box className="flex flex-col lg:flex-row gap-5">
              <Skeleton
                variant="rectangular"
                className="lg:max-w-[250px] w-full h-[10vh] lg:h-[60vh]"
              />
              <Skeleton variant="rectangular" className="flex-grow h-[60vh]" />
            </Box>
          ) : (
            <Box className="flex flex-col lg:flex-row gap-5">
              <Sidebar
                user={user}
                onlineUsers={onlineUsers}
                orders={order?.data}
                inbox={inbox?.data?.docs}
              />
              <Chat user={user} onlineUsers={onlineUsers} />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
}
