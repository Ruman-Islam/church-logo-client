import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import useJumpToTop from "../../../hooks/useJumpToTop";

export default function JumpToTopBtn() {
  const { distance } = useJumpToTop();

  const handleJump = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box
      onClick={() => handleJump()}
      className={`bg-primary hover:bg-success hover:animate-jumpToTop text-white fixed right-4 z-50 rounded-md duration-300 cursor-pointer p-2 ${
        distance >= 2000 ? "bottom-[75px]" : "-bottom-14"
      }`}
    >
      {distance >= 2000 ? (
        <ExpandLessIcon type="button" />
      ) : (
        <ExpandMoreIcon type="button" />
      )}
    </Box>
  );
}
