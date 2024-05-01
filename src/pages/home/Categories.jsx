import Slider from "react-slick";
import SectionTitle from "../../components/common/SectionTitle";

import CatImg1 from "../../assets/image/category/cat2.jpeg";
import CatImg2 from "../../assets/image/category/cat3.jpeg";
import CatImg3 from "../../assets/image/category/cat4.jpeg";
import CatImg4 from "../../assets/image/category/cat5.jpeg";
import CategoryCard from "../../components/common/Cards/CategoryCard";

export default function Categories() {
  const categories = [
    { id: 1, img: CatImg1, title: "Word Mark", route: "/" },
    { id: 2, img: CatImg2, title: "Letter Mark", route: "/" },
    { id: 3, img: CatImg3, title: "Pictorial Mark", route: "/" },
    { id: 4, img: CatImg4, title: "Abstract Mark", route: "/" },
    { id: 5, img: CatImg4, title: "Mascot Logo", route: "/" },
    { id: 6, img: CatImg4, title: "Combination Mark", route: "/" },
    { id: 7, img: CatImg4, title: "Emblem Logo", route: "/" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-section__bbg_color">
      <div className="container px-2 py-[50px]">
        <div>
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size leading-[35px] text-center"
          />
        </div>
        <br />
        <div className="slider-container w-full">
          <Slider {...settings} className="p-2">
            {categories.map((category) => (
              <CategoryCard
                cardContainerClass="max-w-[350px] md:max-w-[300px] w-full h-full mx-[11px] rounded-lg bg-white aspect-[1.3/1] text-center border"
                imgClass="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
                key={category.id}
                route={category.route}
                category={category}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
