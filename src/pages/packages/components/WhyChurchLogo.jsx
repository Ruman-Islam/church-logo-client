import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Box from "@mui/material/Box";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

const ratingData = [
  {
    Icon: <StarIcon fontSize="large" />,
    title: "4.8/5 star rating",
    text: "Our stellar ratings from countless customer reviews highlight our commitment to excellence. When our designers are happy, our clients are even happier.",
  },
  {
    Icon: <SupportAgentIcon fontSize="large" />,
    title: "Certified Freelance Logo Experts",
    text: "Our logo designers are seasoned professionals who truly get to know your business, bringing their verified industry experience and creativity to every project.",
  },
  {
    Icon: <ThumbUpIcon fontSize="large" />,
    title: "Guaranteed Satisfaction in Design",
    text: "At Church Logo, we guarantee 100% satisfaction with our expert ensuring your brand stands out and resonates with your audience.",
  },
  {
    Icon: <VerifiedUserIcon fontSize="large" />,
    title: "24/7 design support",
    text: "Whenever you need help, our friendly and genuine support team is here for you. No question is too small or too complex!",
  },
];

const RatingCard = (props) => {
  const { Icon, title, text } = props;
  return (
    <Box className="basis-full md:basis-[48%] flex gap-2">
      <Box className="text-primary">{Icon}</Box>
      <Box>
        <h2 className="font-brand__font__600 text-brand__font__size__md leading-tight">
          {title}
        </h2>
        <p className="mt-2 text-text__gray text-brand__font__size__sm leading-snug">
          {text}
        </p>
      </Box>
    </Box>
  );
};

export default function WhyChurchLogo() {
  return (
    <Box className="flex flex-col lg:flex-row justify-center items-center gap-5 md:mt-10 rounded-md container">
      <Box className="basis-full lg:basis-[40%] hidden lg:flex justify-center items-center">
        <img
          src={getImgUrl("image/hero-banner/churchlogo_slider_02.png")}
          alt="church_logo"
        />
      </Box>
      <Box className="basis-full lg:basis-[60%] p-5">
        <Box className="leading-tight">
          <h2 className="text-[24px] md:text-[32px]">So, why Church Logo?</h2>
          <h2 className="leading-[40px]">
            We live and breathe design, and folks think that’s pretty rad.
          </h2>
        </Box>
        <Box className="flex flex-wrap gap-5 py-5">
          {ratingData.map((item) => (
            <RatingCard key={item?.title} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
