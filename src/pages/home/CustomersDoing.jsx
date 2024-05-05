import Slider from "react-slick";
import SectionTitle from "../../components/common/SectionTitle";

import photo1 from "../../assets/image/cards/Photog_UC-10-min.jpg";
import photo2 from "../../assets/image/cards/Photog_UC-4-min.jpg";
import photo3 from "../../assets/image/cards/Photog_UC-5-min.jpg";
import photo4 from "../../assets/image/cards/Photog_UC-7-min.jpg";
import photo5 from "../../assets/image/cards/Photog_UC-8-min.jpg";
import photo6 from "../../assets/image/cards/Photog_UC-9-min.jpg";

const photos = [
  { id: 1, img: photo1, title: "Word Mark" },
  { id: 2, img: photo2, title: "Letter Mark" },
  { id: 3, img: photo3, title: "Pictorial Mark" },
  { id: 4, img: photo4, title: "Abstract Mark" },
  { id: 5, img: photo5, title: "Mascot Logo" },
  { id: 6, img: photo6, title: "Combination Mark" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
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

export default function CustomersDoing() {
  return (
    <div>
      <div className="container px-2 py-[50px]">
        <div>
          <SectionTitle
            title="Check out the cool things our customers are doing with their Churchlogo"
            titleClass="text-brand__font__size__lg md:text-brand__font__size__xl leading-[25px] md:leading-[50px] text-center"
          />
        </div>
        <br />
        <div className="slider-container w-full">
          <Slider {...settings} className="p-2">
            {photos.map((content) => (
              <div
                key={content.id}
                className="w-full h-full rounded-lg bg-white aspect-[1.3/1] text-center p-2"
              >
                <div className="mb-3">
                  <img
                    src={content.img}
                    alt=""
                    className="rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <p className="leading-tight p-2 text-left shadow text-gray-500">
                  <small>
                    <em>
                      #ilovephotologo “Awesome experience! I asked for a slight
                      revision and you guys got it done ASAP. I love it!!! Thank
                      you“
                    </em>
                  </small>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
