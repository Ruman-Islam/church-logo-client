import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout/index";
import { getImgUrl } from "../../utils/getImgUrl-utility";

const galleryNavButtons = [
  {
    id: 1,
    title: "Logo Design",
    route: "/gallery/logo-design",
    match: "logo-design",
  },
  {
    id: 2,
    title: "Web Design",
    route: "/gallery/web-design",
    match: "web-design",
  },
  {
    id: 3,
    title: "Branding",
    route: "/gallery/branding",
    match: "branding",
  },
  {
    id: 3,
    title: "Personal Signature",
    route: "/gallery/personal-signature",
    match: "personal-signature",
  },
];

export default function GalleryBrandingScreen() {
  const { pathname } = useLocation();
//   const [loading, setLoading] = useState(true);
//   const [gallery, setGallery] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:8081/gallery");
//       const data = await res.json();

//       setGallery(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

  return (
    <Layout title="Gallery & Examples">
      <section id="logo-design">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">Gallery</h3>
        </div>
        <div className="container px-2 flex flex-col gap-5 py-[30px] xl:py-[60px]">
          <div className="flex flex-wrap lg:justify-center items-center gap-2">
            {galleryNavButtons.map((d) => (
              <HashLink
                key={d.id}
                to={d.route}
                className={`border text-text__gray hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full font-brand__font__600 px-4 lg:px-6 py-1 lg:py-1.5 text-brand__font__size__xs lg:text-brand__font__size__sm ${
                  pathname && pathname.includes(d.match)
                    ? "bg-primary border-primary text-white"
                    : "border-text__gray"
                }`}
              >
                {d?.title}
              </HashLink>
            ))}
          </div>
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 p-2">
              {/* {(loading ? Array.from(new Array(8)) : gallery)
                ?.slice(0, 8)
                .map((d, i) =>
                  d ? (
                    <PhotoView key={i} src={getImgUrl(d)}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration={`${i + 1 * 5}00`}
                        src={getImgUrl(d)}
                        className="w-full h-full object-cover rounded-md hover:cursor-pointer"
                      />
                    </PhotoView>
                  ) : (
                    <Skeleton key={i} variant="rectangular" height={218} />
                  )
                )} */}
            </div>
          </PhotoProvider>

          {/* {showLoadMoreBtn ? (
            <div className="flex justify-center">
              <Button
                onClick={showMoreItem}
                className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                variant="contained"
              >
                Load More
              </Button>
            </div>
          ) : null} */}
        </div>
      </section>
    </Layout>
  );
}
