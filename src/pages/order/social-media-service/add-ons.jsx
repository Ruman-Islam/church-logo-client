import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import { addToCart } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import OrderStepper2 from "../components/OrderStepper2";

const animatedComponents = makeAnimated();

export default function OrderAddOnsScreen() {
  useAutomaticScrollWithOffset();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const cartItem = cartItems?.find(
    (item) => item?.category === "social-media-service"
  );

  const { data, isFetching } = useGetOnePackageQuery(id);
  const packageData = data?.data;

  const additionalFeatures = packageData?.additionalFeatures;
  const additionalRevisions = packageData?.revisions;
  const additionalDeliveryTimes = packageData?.deliveryTimes;

  const [selectedAdditionalFeats, setSelectedAdditionalFeats] = useState(
    cartItem?.selectedAdditionalFeats?.length
      ? cartItem?.selectedAdditionalFeats
      : []
  );
  const [selectedAdditionalRevision, setSelectedAdditionalRevision] = useState(
    cartItem?.selectedAdditionalRevision?.length
      ? cartItem?.selectedAdditionalRevision
      : []
  );
  const [selectedAdditionalDeliveryTime, setSelectedAdditionalDeliveryTime] =
    useState(
      cartItem?.selectedAdditionalDeliveryTime?.length
        ? cartItem?.selectedAdditionalDeliveryTime
        : []
    );

  const handleAdditionalFeats = (value) => {
    setSelectedAdditionalFeats(value);
  };

  const handleAdditionalRevision = (value) => {
    setSelectedAdditionalRevision(value ? [value] : []);
  };

  const handleAdditionalDeliveryTime = (value) => {
    setSelectedAdditionalDeliveryTime(value ? [value] : []);
  };

  const handleSubmit = () => {
    const order = {
      ...cartItem,
      selectedAdditionalFeats,
      selectedAdditionalRevision,
      selectedAdditionalDeliveryTime,
    };

    dispatch(addToCart(order));
    navigate(`/order/social-media-service/review/${id}#review`);
  };

  return (
    <Layout title="Add ons">
      {isFetching ? (
        <Loader />
      ) : (
        <Box id="add-ons" className="bg-section__bg_color h-full">
          <SectionBanner
            heading="Want to add more items?"
            desc="Let's start by helping your designers understand which styles you prefer."
          />
          {!data && !isFetching ? (
            <Box className="flex justify-center items-center w-full h-[10vh]">
              No data found!
            </Box>
          ) : (
            <Box className="flex flex-col gap-10">
              <Box className="max-w-[1000px] w-full mx-auto py-10 container">
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
                      <Box className="flex-1">
                        <Select
                          isMulti
                          isClearable
                          isSearchable
                          onChange={handleAdditionalFeats}
                          closeMenuOnSelect={true}
                          components={animatedComponents}
                          defaultValue={[...selectedAdditionalFeats]}
                          options={additionalFeatures}
                          getOptionLabel={(option) =>
                            `${option.label}: $${option.price}`
                          }
                        />
                      </Box>
                    </Box>

                    <Divider className="my-10 md:my-20 hidden md:block" />
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

                      <Box className="flex-1">
                        <Select
                          onChange={handleAdditionalRevision}
                          closeMenuOnSelect={true}
                          isClearable
                          isSearchable
                          components={animatedComponents}
                          defaultValue={selectedAdditionalRevision}
                          options={additionalRevisions}
                          getOptionLabel={(option) =>
                            `${option.label}: $${option.price}`
                          }
                        />
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
                        <Box className="flex-1">
                          <Select
                            onChange={handleAdditionalDeliveryTime}
                            closeMenuOnSelect={true}
                            isClearable
                            isSearchable
                            components={animatedComponents}
                            defaultValue={selectedAdditionalDeliveryTime}
                            options={additionalDeliveryTimes}
                            getOptionLabel={(option) =>
                              `${option.label}: $${option.price}`
                            }
                          />
                        </Box>
                      </Box>
                    </>
                  )}
              </Box>
              <AppBar className="bg-white sticky bottom-0 w-full">
                <Toolbar className="max-w-[1000px] w-full mx-auto py-5 lg:py-8">
                  <Box className="w-full mx-auto flex justify-between items-center gap-4">
                    <Button
                      onClick={() => navigate(-1)}
                      className="bg-primary hover:bg-brand__black__color text-white px-10 rounded-full font-brand__font__600 hidden md:block"
                    >
                      Back
                    </Button>
                    <OrderStepper2 value={60} />

                    <Button
                      onClick={handleSubmit}
                      className={`bg-primary hover:bg-brand__black__color text-white px-10 rounded-full font-brand__font__600`}
                    >
                      Continue
                    </Button>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
}
