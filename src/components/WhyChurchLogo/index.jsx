import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { getImgUrl } from "../../utils/getImgUrl-utility";

const ratingData = [
  {
    Icon: <StarIcon fontSize="large" />,
    title: "4.8/5 star rating",
    text: "That’s our average rating from 37,533 customer reviews. Happy designers make happy clients.",
  },
  {
    Icon: <SupportAgentIcon fontSize="large" />,
    title: "100% money-back guarantee for contests",
    text: "Great design, guaranteed. Love your final design or get your money back. T&Cs apply.",
  },
  {
    Icon: <ThumbUpIcon fontSize="large" />,
    title: "Verified freelance logo designers",
    text: "Our logo designers are vetted, creative professionals with verified industry experience who take the time to understand your business.",
  },
  {
    Icon: <VerifiedUserIcon fontSize="large" />,
    title: "24/7 design support",
    text: "Get help when you need it with our support team of real bonafide humans. No question is too small or complex!",
  },
];

const RatingCard = (props) => {
  const { Icon, title, text } = props;
  return (
    <div className="basis-full md:basis-[48%] flex gap-2">
      <div>{Icon}</div>
      <div>
        <h2 className="font-brand__font__600 text-brand__font__size__md">
          {title}
        </h2>
        <p className="mt-2 text-text__gray">{text}</p>
      </div>
    </div>
  );
};

export default function WhyChurchLogo() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-5  md:mt-10">
      <div className="basis-full xl:basis-[60%] p-5">
        <div className="leading-tight">
          <h2 className="text-[24px] md:text-[32px]">
            So, why Church Logo for a brand identity design?
          </h2>
          <h3 className="leading-[60px]">
            We live and breathe design, and folks think that’s pretty rad.
          </h3>
        </div>
        <div className="flex flex-wrap gap-5 py-5">
          {ratingData.map((item) => (
            <RatingCard key={item?.title} {...item} />
          ))}
        </div>
      </div>
      <div className="basis-full xl:basis-[40%] flex justify-center items-center">
        <img
          src={getImgUrl("image/hero-banner/churchlogo_slider_02.png")}
          alt="church_logo"
        />
      </div>
    </div>
  );
}
