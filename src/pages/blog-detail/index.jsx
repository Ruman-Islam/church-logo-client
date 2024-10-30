import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import { useGetBlogQuery } from "../../services/features/blog/blogApi";

const BlogDetailScreen = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const { data, isFetching } = useGetBlogQuery(id);

  useEffect(() => {
    setBlog(data?.data);
  }, [data?.data]);

  return (
    <Layout title={blog?.metaTitle} description={blog?.metaDescription}>
      {isFetching ? (
        <Skeleton
          variant="rectangular"
          className="rounded-xl w-full h-[180px]"
        />
      ) : (
        <SectionBanner heading={blog?.title} desc="" />
      )}

      <div className="container px-4 py-[30px] all-initial">
        <div className="max-w-[1000px] w-full mx-auto">
          {isFetching ? (
            <Box className="flex flex-col gap-3">
              <Skeleton
                variant="rectangular"
                className="rounded-xl max-w-[800px] w-full h-[30px]"
              />
              <Skeleton
                variant="rectangular"
                className="rounded-xl max-w-[700px] w-full h-[30px]"
              />
              <Skeleton
                variant="rectangular"
                className="rounded-xl max-w-[600px] w-full h-[30px]"
              />
              <Skeleton
                variant="rectangular"
                className="rounded-xl max-w-[900px] w-full h-[350px]"
              />
              <Skeleton
                variant="rectangular"
                className="rounded-xl max-w-[300px] w-full h-[30px]"
              />
            </Box>
          ) : (
            <ReactQuill theme="bubble" readOnly value={blog?.content} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetailScreen;
