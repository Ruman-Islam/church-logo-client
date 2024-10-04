import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaArrowRight } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import { useGetBlogListQuery } from "../../services/features/blog/blogApi";

function BlogCard({ blog, isThumbnail }) {
  const { _id, thumbnail, title, description } = blog;

  return (
    <Box className="max-w-[310px] w-full flex flex-col gap-3">
      {isThumbnail && (
        <Box>
          <img
            className="w-full h-full rounded-md"
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
          {description.length > 100
            ? description.slice(0, 100) + " " + "..."
            : description}
        </Typography>
        <HashLink
          to={`/blog/${_id}`}
          className="w-fit text-primary font-brand__font__thin text-brand__font__size__xs flex items-center gap-x-1 hover:text-brand__black__color duration-200"
        >
          Read More <FaArrowRight size={12} />
        </HashLink>
      </Box>
    </Box>
  );
}

export default function BlogScreen() {
  const { data, isFetching } = useGetBlogListQuery();
  const blogs = data?.data ? data?.data : [];

  return (
    <Layout title="Blog">
      <Box id="blog">
        <SectionBanner
          heading="A blog about Church Logo"
          desc="Elevate Your Online Presence with Our Expert Design Services!"
        />

        <Box className="max-w-[1024px] w-full h-full mx-auto px-4 py-5 lg:py-10">
          <Box className="flex flex-col gap-10">
            <Box className="flex flex-col md:flex-row gap-5">
              <Box className="basis-[65%] flex flex-col md:flex-row items-center md:items-start gap-5">
                {(isFetching
                  ? Array.from(new Array(2))
                  : blogs.slice(0, 2)
                ).map((blog, idx) =>
                  blog ? (
                    <BlogCard key={blog?.id} blog={blog} isThumbnail />
                  ) : (
                    <Box key={idx}>
                      <Box className="flex flex-col gap-2">
                        <Skeleton
                          variant="rectangular"
                          className="rounded-md"
                          width={300}
                          height={218}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={15}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={200}
                          height={25}
                        />
                      </Box>
                    </Box>
                  )
                )}
              </Box>
              <Box className="basis-[35%] w-full flex flex-col items-center md:items-start gap-5">
                {(isFetching
                  ? Array.from(new Array(2))
                  : blogs.slice(2, 5)
                ).map((blog, idx) =>
                  blog ? (
                    <BlogCard key={blog?.id} blog={blog} />
                  ) : (
                    <Box key={idx}>
                      <Box className="flex flex-col gap-2">
                        <Skeleton
                          variant="rectangular"
                          className="rounded-md"
                          width={300}
                          height={218}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={15}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={200}
                          height={25}
                        />
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </Box>

            <Box className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              {(isFetching ? Array.from(new Array(3)) : blogs.slice(5, 8)).map(
                (blog, idx) =>
                  blog ? (
                    <BlogCard key={blog?.id} blog={blog} isThumbnail />
                  ) : (
                    <Box key={idx}>
                      <Box className="flex flex-col gap-2">
                        <Skeleton
                          variant="rectangular"
                          className="rounded-md"
                          width={300}
                          height={218}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={250}
                          height={15}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={200}
                          height={25}
                        />
                      </Box>
                    </Box>
                  )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
