import Box from "@mui/material/Box";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";

export default function BlogScreen() {
  return (
    <Layout title="Blog">
      <Box id="blog">
        <SectionBanner
          heading="A blog about Church Logo"
          desc="Elevate Your Online Presence with Our Expert Design Services!"
        />
      </Box>
    </Layout>
  );
}
