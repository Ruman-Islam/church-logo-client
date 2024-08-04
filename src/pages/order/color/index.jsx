import Box from "@mui/material/Box";
import Layout from "../../../components/common/Layout";
import SectionBanner from "../../../components/common/SectionBanner";
import OrderStepper from "../components/OrderStepper";

export default function OrderColorDesignScreen() {
  return (
    <Layout title="Your design brief">
      <Box id="color-design">
        <SectionBanner
          heading="Logo & brand identity pack brief"
          desc="Fill out the brief so the designers know what you‘re looking for."
        />

        <Box className="container mb-10">
          <Box className="py-10">
            <OrderStepper activeStep={1} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
