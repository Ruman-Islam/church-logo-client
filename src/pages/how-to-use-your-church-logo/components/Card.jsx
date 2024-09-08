import Box from "@mui/material/Box";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

function Card(props) {
  const { content } = props;
  return (
    <Box className="w-full h-full rounded-lg bg-white aspect-[1.3/1] text-center p-2 cursor-grab active:cursor-grabbing">
      <Box className="mb-2">
        <img
          src={getImgUrl(content?.img)}
          alt="church_logo"
          className="rounded-tl-lg rounded-tr-lg"
        />
      </Box>
    </Box>
  );
}

export default Card;
