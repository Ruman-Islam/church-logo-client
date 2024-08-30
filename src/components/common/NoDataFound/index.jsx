import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import noDataFoundImg from "../../../assets/image/utils/nodatafound.jpg";

export default function NoDataFound() {
  return (
    <Box className="flex justify-center items-center w-full h-full border bg-white">
      <Avatar
        alt={"N"}
        src={noDataFoundImg}
        className="max-w-[500px] w-full max-h-[500px] h-full"
        variant="square"
      />
    </Box>
  );
}
