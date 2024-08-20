import { Box } from "@mui/material";

export default function SectionBanner({ heading, desc }) {
  return (
    <Box className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[250px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight p-2">
      <h3 className="text-[22px] md:text-[27px] xl:text-[37px]">{heading}</h3>
      {desc && <p className="text-[14px] md:text-[18px] mt-1">{desc}</p>}
    </Box>
  );
}
