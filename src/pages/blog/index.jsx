import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaArrowRight } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import blogs from "../../data/blogs.json";

function BlogCard({ blog, isThumbnail }) {
  const { thumbnail, title, content, pageUrl } = blog;

  return (
    <Box className="max-w-[310px] w-full flex flex-col gap-3">
      {isThumbnail && (
        <Box>
          <img
            className="w-full h-full rounded-xl"
            src={thumbnail}
            alt="church_logo"
          />
        </Box>
      )}

      <Box className="flex flex-col gap-3">
        <Typography
          component="p"
          className="font-brand__font__semibold text-brand__font__size__md leading-tight"
        >
          {title}
        </Typography>
        <Typography className="leading-snug text-brand__font__size__sm text-text__gray">
          {content.length > 100 ? content.slice(0, 100) + " " + "..." : content}
        </Typography>
        <HashLink
          to={pageUrl}
          className="w-fit text-primary font-brand__font__thin text-brand__font__size__xs flex items-center gap-x-1 hover:text-brand__black__color duration-200"
        >
          Read More <FaArrowRight size={12} />
        </HashLink>
      </Box>
    </Box>
  );
}

export default function BlogScreen() {
  const sortedBlogs = blogs?.sort((a, b) => b?.id - a?.id);

  return (
    <Layout title="Blog">
      <Box id="blog">
        <SectionBanner
          heading="A blog about Church Logo"
          desc="Elevate Your Online Presence with Our Expert Design Services!"
        />

        <Box className="max-w-[1024px] w-full h-full mx-auto px-4 py-5 lg:py-10">
          <Box className="flex flex-col gap-10">
            <Box className="flex gap-5">
              <Box className="basis-[65%] flex gap-5">
                {sortedBlogs.slice(0, 2).map((blog) => (
                  <BlogCard key={blog?.id} blog={blog} isThumbnail />
                ))}
              </Box>
              <Box className="basis-[35%] w-full flex flex-col gap-5">
                {sortedBlogs.slice(2, 5).map((blog) => (
                  <BlogCard key={blog?.id} blog={blog} />
                ))}
              </Box>
            </Box>

            <Box className="flex gap-5">
              {sortedBlogs.slice(5, 8).map((blog) => (
                <BlogCard key={blog?.id} blog={blog} isThumbnail />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
