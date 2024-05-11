// import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";

const portfolioData = [
  {
    id: 1,
    img: Banner1,
    headLine:
      "Church Logo is a platform with a good name and a very good service…",
    feedBack:
      "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
  },
  {
    id: 2,
    img: Banner1,
    headLine:
      "Church Logo is a platform with a good name and a very good service…",
    feedBack:
      "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
  },
];

const renderArrows = () => {
  return (
    <div className="slider-arrow">
      <button
        className="arrow-btn prev"
        onClick={() => this.slider.slickPrev()}
      >
        {/* <ArrowLeft /> */}
      </button>
      <button
        className="arrow-btn next"
        onClick={() => this.slider.slickNext()}
      >
        {/* <ArrowRight /> */}
      </button>
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function Portfolio() {
  return (
    <div className="w-full xl:max-h-[800px] bg-globe bg-no-repeat bg-[length:1000px_700px] bg-right relative">
      {/* <div className="bg-white absolute w-full h-full"></div> */}
      <div className="slider-container-portfolio p-10 xl:p-20">
        <Slider {...settings} className="p-5">
          {portfolioData.map((d) => (
            <div key={d.id} className="px-[0px] xl:px-[100px]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="basis-[50%] w-full">
                  <img src={d.img} className="w-full" />
                </div>
                <div className="flex-1 w-full h-full pl-0 xl:pl-10">
                  <div className="max-w-[100%] xl:max-w-[400px] w-full text-center xl:text-left">
                    <h2 className="text-[32px] max-w-[500px] mx-auto leading-tight text-primary">
                      {d.headLine}
                    </h2>
                    <br />
                    <p className="max-w-[500px] mx-auto font-brand__font__regular">
                      {d.feedBack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
