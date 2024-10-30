import Box from "@mui/material/Box";
import { useAppSelector } from "../../../../services/hook";
import checkIsOnline from "../../../../utils/checkIsOnline";

const MessageHead = ({ data }) => {
  const {
    chat: { adminsAndClientsOnlineList },
  } = useAppSelector((state) => state);

  const isOnline = checkIsOnline(adminsAndClientsOnlineList);

  return (
    <Box className="flex items-center gap-x-1 border-b p-4">
      <Box>
        {`${data?.participant?.firstName} ${data?.participant?.lastName}`}
      </Box>
      <Box
        className={`w-1.5 h-1.5 rounded-full ${
          isOnline ? "bg-primary" : "bg-text__gray"
        } `}
      />
    </Box>
  );
};

export default MessageHead;
