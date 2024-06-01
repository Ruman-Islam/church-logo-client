import { useState } from "react";
import Layout from "../../components/common/Layout";
import data from "../../data/categories.json";
import galleryData from "../../data/gallery.json";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import { Button } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function GalleryScreen() {
  const [selectedCategory, setSelectedCategory] = useState("logo-design");
  const [visible, setVisible] = useState(8);
  const showLoadMoreBtn = galleryData[selectedCategory]?.length > visible;

  const showMoreItem = () => {
    setVisible((prev) => prev + 4);
  };

  const handleTabChange = (matchText) => {
    setSelectedCategory(matchText);
  };

  return (
    <Layout title="Gallery & Examples">
      <section id="gallery">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">Gallery</h3>
        </div>
        <div className="container px-2 flex flex-col gap-5 py-[30px] xl:py-[60px]">
          <div className="flex justify-center items-center gap-5">
            {data.map((d) => (
              <Button
                key={d.id}
                onClick={() => handleTabChange(d.matchText)}
                className={`border text-text__gray hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full px-6 font-brand__font__600 py-1.5 text-brand__font__size__sm ${
                  d.matchText.includes(selectedCategory) ?
                  "bg-primary border-primary text-white" : "border-text__gray"
                }`}
                variant="outlined"
              >
                {d?.title}
              </Button>
            ))}
          </div>
          <PhotoProvider>
            <div className="grid grid-cols-4 gap-4 p-2">
              {galleryData[selectedCategory].slice(0, visible).map((d, i) => (
                <PhotoView key={i} src={getImgUrl(d)} >
                  <img data-aos="flip-left" data-aos-duration={`${5+5}00`}
                    src={getImgUrl(d)}
                    className="w-full h-full object-cover rounded-md hover:cursor-pointer" 
                    
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>

          {showLoadMoreBtn ? (
            <div className="flex justify-center">
              <Button
                onClick={showMoreItem}
                className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                variant="contained"
              >
                Load More
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
