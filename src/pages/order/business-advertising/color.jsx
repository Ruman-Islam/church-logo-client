import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Skeleton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/common/Layout";
import SectionBanner from "../../../components/common/SectionBanner";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import { setLogoDesignBrief } from "../../../services/features/cart/cartSlice";
import { useGetSystemConfigQuery } from "../../../services/features/system/systemApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import OrderStepper2 from "../components/OrderStepper2";

export default function OrderColorDesignScreen() {
  useAutomaticScrollWithOffset();

  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const cartItem = cartItems?.find(
    (item) => item.category === "business-advertising"
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [selectedColors, setSelectedColors] = useState(
    cartItem?.preferredColors || []
  );

  const { data, isLoading } = useGetSystemConfigQuery();

  const colorSample = data?.data?.orderSettings?.colorSample;

  const handlePreferableColors = (img) => {
    setSelectedColors((prev) => {
      const exist = prev.find((item) => item.publicId === img.publicId);

      if (exist) {
        return prev.filter((item) => item.publicId !== img.publicId);
      } else {
        if (prev.length >= 3) {
          toast("⚠️ You can only select up to 3 colors");
          return prev;
        } else {
          return [...prev, img];
        }
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (selectedColors.length === 0) {
      return toast("⚠️ Please select at least one color.");
    }

    const order = {
      ...cartItem,
      preferredColors: selectedColors,
    };

    dispatch(setLogoDesignBrief(order));

    navigate(`/order/business-advertising/add-ons#add-ons`);
  };

  return (
    <Layout title="Choose palette">
      <Box id="color" className="bg-section__bg_color h-full">
        <SectionBanner
          heading="Colors to explore"
          desc="Pick up to three colors you'd like your designers to explore."
        />
        <Box className="container py-10">
          <Box>
            <form onSubmit={onSubmit}>
              <Box className="max-w-[1000px] w-full mx-auto">
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                  {(isLoading ? Array.from(new Array(6)) : colorSample).map(
                    (img, i) => {
                      const isSelected = selectedColors.find(
                        (item) => item?.publicId === img?.publicId
                      );

                      return img ? (
                        <Box
                          key={img?.publicId}
                          data-aos="flip-left"
                          data-aos-duration={`${i + 1 * 5}00`}
                          onClick={() => handlePreferableColors(img)}
                          className="hover:shadow-xl relative border cursor-pointer"
                        >
                          <Box
                            className={`absolute w-full h-full flex justify-end items-end p-2 text-primary duration-300 border-4 border-primary border-opacity-0 hover:border-opacity-100  ${
                              isSelected && "border-opacity-100"
                            }`}
                          >
                            {isSelected && <CheckCircleIcon />}
                          </Box>

                          <img src={img?.secureUrl} alt="church_logo" />

                          <Box className="p-2">{img?.displayName}</Box>
                        </Box>
                      ) : (
                        <Skeleton key={i} variant="rectangular" height={218} />
                      );
                    }
                  )}
                </Box>

                <AppBar
                  position="fixed"
                  className="bg-white"
                  sx={{ top: "auto", bottom: 0 }}
                >
                  <Toolbar>
                  <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center gap-3">
                      <OrderStepper2 value={40} />

                      <Button
                        disabled={!selectedColors.length}
                        type="submit"
                        className={`${
                          !selectedColors.length
                            ? "bg-text__gray"
                            : "bg-primary hover:bg-brand__black__color"
                        } text-white px-10 rounded-full font-brand__font__600`}
                      >
                        Continue
                      </Button>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
