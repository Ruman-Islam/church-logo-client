import { Box } from "@mui/material";

export default function SectionBanner({ heading, desc }) {
  return (
    <Box className="bg-page_bg h-[150px] lg:h-[180px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight p-2">
      <h3 className="text-[22px] md:text-[37px] xl:text-[42px]">{heading}</h3>
      {desc && <p className="text-[12px] md:text-[18px] mt-2 max-w-[700px] w-full">{desc}</p>}
    </Box>
  );
}
