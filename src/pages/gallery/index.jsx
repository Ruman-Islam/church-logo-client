import { useState } from "react";
import Layout from "../../components/common/Layout";
import data from "../../data/categories.json";
import galleryData from "../../data/gallery.json";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function GalleryScreen() {
  const [selectedCategory, setSelectedCategory] = useState("logo-design");

  const handleTabChange = (matchText) => {
    setSelectedCategory(matchText);
  };

  return (
    <Layout title="Gallery & Examples">
      <section id="gallery">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">Gallery</h3>
        </div>
        <div className="container px-2 py-[30px] lg:py-[60px]">
          <div className="flex justify-center items-center gap-5 mb-5">
            {data.map((d) => (
              <button
                key={d.id}
                to={d.route}
                onClick={() => handleTabChange(d.matchText)}
                className={`border hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full px-4 py-1.5 text-brand__font__size__sm ${
                  d.matchText.includes(selectedCategory) &&
                  "bg-primary text-white"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap justify-center border p-2">
            {galleryData[selectedCategory].map((d, i) => (
              <div
                key={i}
                className="max-w-[350px] w-full h-[250px] rounded-md"
              >
                <div className="w-full h-full">
                  <img
                    src={getImgUrl(d)}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
