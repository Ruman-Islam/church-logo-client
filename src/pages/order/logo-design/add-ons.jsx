import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import { setLogoDesignBrief } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import OrderStepper2 from "../components/OrderStepper2";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function OrderAddOnsScreen() {
  useAutomaticScrollWithOffset();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const cartItem = cartItems?.find((item) => item?.category === "logo-design");

  const { data, isLoading } = useGetOnePackageQuery(cartItem?.packageId);
  const packageData = data?.data;

  const additionalFeatures = packageData?.additionalFeatures;
  const additionalRevisions = packageData?.revisions;
  const additionalDeliveryTimes = packageData?.deliveryTimes;

  const [selectedAdditionalFeats, setSelectedAdditionalFeats] = useState([]);
  const [selectedAdditionalRevision, setSelectedAdditionalRevision] =
    useState("");
  const [selectedAdditionalDeliveryTime, setSelectedAdditionalDeliveryTime] =
    useState("");

  useEffect(() => {
    if (cartItem?.selectedAdditionalFeats?.length) {
      const filtered = cartItem?.selectedAdditionalFeats.filter((item1) =>
        additionalFeatures.some(
          (item2) =>
            item1.label?.toLowerCase() === item2.label?.toLowerCase() &&
            item1.price === item2.price
        )
      );

      setSelectedAdditionalFeats(filtered);
    }
    if (cartItem?.selectedAdditionalRevision) {
      const filtered = additionalRevisions.find(
        (item) =>
          item?.label?.toLowerCase() ===
            cartItem?.selectedAdditionalRevision?.label?.toLowerCase() &&
          item?.price === cartItem?.selectedAdditionalRevision?.price
      );
      setSelectedAdditionalRevision(filtered || "");
    }
    if (cartItem?.selectedAdditionalDeliveryTime) {
      const filtered = additionalDeliveryTimes.find(
        (item) =>
          item?.label?.toLowerCase() ===
            cartItem?.selectedAdditionalDeliveryTime?.label?.toLowerCase() &&
          item?.price === cartItem?.selectedAdditionalDeliveryTime?.price
      );

      setSelectedAdditionalDeliveryTime(filtered || "");
    }
  }, [
    additionalDeliveryTimes,
    additionalFeatures,
    additionalRevisions,
    cartItem,
  ]);

  const handleAdditionalFeats = (event) => {
    const {
      target: { value },
    } = event;

    const uniqueArr = value.filter(
      (item, _, self) =>
        self.filter(
          (t) =>
            t.label?.toLowerCase() === item.label?.toLowerCase() &&
            t.price === item.price
        ).length === 1
    );

    setSelectedAdditionalFeats(uniqueArr);
  };

  const handleAdditionalRevision = (event) => {
    setSelectedAdditionalRevision(
      additionalRevisions.find(
        (item) =>
          item.label?.toLowerCase() === event.target.value?.toLowerCase()
      ) || ""
    );
  };

  const handleAdditionalDeliveryTime = (event) => {
    setSelectedAdditionalDeliveryTime(
      additionalDeliveryTimes.find(
        (item) =>
          item.label?.toLowerCase() === event.target.value?.toLowerCase()
      ) || ""
    );
  };

  const handleSubmit = () => {
    const order = {
      ...cartItem,
      selectedAdditionalFeats,
      selectedAdditionalRevision,
      selectedAdditionalDeliveryTime,
    };

    dispatch(setLogoDesignBrief(order));
    navigate(`/order/logo-design/review#review`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout title="Add ons">
      <Box id="add-ons" className="bg-section__bg_color">
        <SectionBanner
          heading="Want to add more items?"
          desc="Let's start by helping your designers understand which styles you prefer."
        />
        {!cartItem ? (
          <Box className="flex justify-center items-center w-full h-[10vh]">
            No data found!
          </Box>
        ) : (
          <Box className="container py-10">
            <Box className="max-w-[1000px] w-full mx-auto">
              {additionalFeatures && additionalFeatures?.length > 0 && (
                <>
                  <Box className="flex flex-col md:flex-row justify-between gap-y-5 mb-10 md:mb-0">
                    <Box className="basis-[100%] md:basis-[35%]">
                      <Typography variant="h5" component="h5">
                        Expand your package
                      </Typography>

                      <Divider className="md:max-w-[250px] w-full my-1" />

                      <Box className="flex gap-x-1 text-text__gray mt-1">
                        <FaInfoCircle className="text-brand__font__size__sm" />
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                          className="md:max-w-[250px] w-full leading-snug"
                        >
                          You can add more items to your package from the
                          options listed here.
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex-1 flex justify-end">
                      <FormControl className="w-full">
                        <InputLabel>Select</InputLabel>
                        <Select
                          multiple
                          value={selectedAdditionalFeats}
                          onChange={handleAdditionalFeats}
                          input={<OutlinedInput label="Select" />}
                          MenuProps={MenuProps}
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value?.label} label={value?.label} />
                              ))}
                            </Box>
                          )}
                        >
                          {additionalFeatures.map((item) => (
                            <MenuItem key={item?.label} value={item}>
                              <Checkbox
                                checked={selectedAdditionalFeats.some(
                                  ({ label }) =>
                                    label?.toLowerCase() ===
                                    item?.label?.toLowerCase()
                                )}
                              />
                              <ListItemText
                                primary={`${item?.label} ($${item?.price})`}
                              />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>

                  <Divider className="my-10 md:my-20" />
                </>
              )}

              {additionalRevisions && additionalRevisions?.length > 0 && (
                <>
                  <Box className="flex flex-col md:flex-row justify-between gap-y-5 mb-10 md:mb-0">
                    <Box className="basis-[100%] md:basis-[35%]">
                      <Typography variant="h5" component="h5">
                        Revision
                      </Typography>

                      <Divider className="md:max-w-[250px] w-full my-1" />

                      <Box className="flex gap-x-1 text-text__gray mt-1">
                        <FaInfoCircle className="text-brand__font__size__sm" />
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                          className="md:max-w-[250px] w-full leading-snug"
                        >
                          You can add more items to your package from the
                          options listed here.
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex-1 flex justify-end">
                      <FormControl className="w-full">
                        <InputLabel>Select</InputLabel>
                        <Select
                          input={<OutlinedInput label="Select" />}
                          onChange={handleAdditionalRevision}
                          MenuProps={MenuProps}
                          value={
                            selectedAdditionalRevision
                              ? selectedAdditionalRevision.label
                              : ""
                          }
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {additionalRevisions?.map((item) => (
                            <MenuItem key={item?.label} value={item?.label}>
                              {`${item?.label} ($${item?.price})`}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>

                  <Divider className="my-10 md:my-20" />
                </>
              )}

              {additionalDeliveryTimes &&
                additionalDeliveryTimes?.length > 0 && (
                  <>
                    <Box className="flex flex-col md:flex-row justify-between gap-y-5 mb-20">
                      <Box className="basis-[100%] md:basis-[35%]">
                        <Typography variant="h5" component="h5">
                          Delivery time
                        </Typography>

                        <Divider className="md:max-w-[250px] w-full my-1" />

                        <Box className="flex gap-x-1 text-text__gray mt-1">
                          <FaInfoCircle className="text-brand__font__size__sm" />
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            className="md:max-w-[250px] w-full leading-snug"
                          >
                            You can add more items to your package from the
                            options listed here.
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="flex-1 flex justify-end">
                        <FormControl className="w-full">
                          <InputLabel>Select</InputLabel>
                          <Select
                            input={<OutlinedInput label="Select" />}
                            onChange={handleAdditionalDeliveryTime}
                            MenuProps={MenuProps}
                            value={
                              selectedAdditionalDeliveryTime
                                ? selectedAdditionalDeliveryTime.label
                                : ""
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {additionalDeliveryTimes?.map((item) => (
                              <MenuItem key={item?.label} value={item?.label}>
                                {`${item?.label} ($${item?.price})`}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </>
                )}

              <AppBar
                position="fixed"
                className="bg-white"
                sx={{ top: "auto", bottom: 0 }}
              >
                <Toolbar>
                  <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center">
                    <OrderStepper2 value={60} />

                    <Button
                      onClick={handleSubmit}
                      className={`bg-brand__black__color hover:bg-[#313030] text-white px-4 rounded-full`}
                    >
                      Continue
                    </Button>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
