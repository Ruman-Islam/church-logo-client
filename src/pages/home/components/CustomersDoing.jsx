import Box from "@mui/material/Box";
import Slider from "react-slick";
import SectionTitle from "../../../components/common/SectionTitle";

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: false,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CustomersDoingCard({ slide }) {
  return (
    <Box className="w-full h-full rounded-lg bg-white text-center p-2">
      <Box className="mb-2">
        <img src={slide.url} alt="" className="rounded-lg" />
      </Box>
      {/* <p className="leading-tight p-2 text-left  text-gray-500 h-[80px]">
        <small>
          <em>
            <span>#faithfullogos</span>{" "}
            <span>
              &rdquo;I absolutely LOVE my new signature! It looks professional
              and elegant on my images and products.&rdquo;
            </span>
          </em>
        </small>
      </p> */}
    </Box>
  );
}

export default function CustomersDoing({ data, loading }) {
  const { customersDoing: { title, slideImages = [] } = {} } = data || {};
  return loading ? null : (
    <Box>
      <Box className="container px-4 py-[20px] md:py-[30px] xl:py-[50px]">
        <Box>
          <SectionTitle
            title={title}
            titleClass="text-[22px] md:text-section__title__size xl:text-brand__font__size__xl leading-[30px] md:leading-[40px] xl:leading-[55px] font-brand__font__600 text-center text-center md:mb-4 text-text__gray max-w-[600px] xl:max-w-[1024px] mx-auto"
          />
        </Box>

        <Box className="slider-container w-full cursor-grab active:cursor-grabbing">
          <Slider {...settings} className="p-2">
            {slideImages.map((slide, idx) => (
              <CustomersDoingCard key={idx} slide={slide} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
