import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormLabel,
  List,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { addToCart } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { calculateAdditionalItemPrice } from "../../../utils/calculateAdditionalItemPrice";
import { packagePriceConversion } from "../../../utils/packagePriceConversion";
import OrderStepper2 from "../components/OrderStepper2";

export default function OrderReviewScreen() {
  useAutomaticScrollWithOffset();
  const scrollWithOffset = useScrollWithOffset();
  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartItem = cartItems?.find(
    (item) => item.category === "social-media-service"
  );

  const { data, isFetching } = useGetOnePackageQuery(id);
  const packageData = data?.data;

  const additionalFeatureObj = calculateAdditionalItemPrice(
    cartItem?.selectedAdditionalFeats
  );

  const additionalRevisionObj = calculateAdditionalItemPrice(
    cartItem?.selectedAdditionalRevision
  );

  const additionalDeliveryObj = calculateAdditionalItemPrice(
    cartItem?.selectedAdditionalDeliveryTime
  );

  const totalPrice = Number(
    (
      packagePriceConversion(packageData) +
      additionalFeatureObj.totalPrice +
      additionalRevisionObj.totalPrice +
      additionalDeliveryObj.totalPrice
    ).toFixed(2)
  );

  const handleRemoveAdditionalFeat = (item) => {
    const filtered = additionalFeatureObj?.additionalItems.filter(
      (item2) => item2?.label !== item?.label
    );

    dispatch(addToCart({ ...cartItem, selectedAdditionalFeats: filtered }));
  };

  const handleRemoveAdditionalRevision = (item) => {
    const filtered = additionalRevisionObj?.additionalItems.filter(
      (item2) => item2?.label !== item?.label
    );

    dispatch(addToCart({ ...cartItem, selectedAdditionalRevision: filtered }));
  };

  const handleRemoveAdditionalDeliverTime = (item) => {
    const filtered = additionalDeliveryObj?.additionalItems.filter(
      (item2) => item2?.label !== item?.label
    );

    dispatch(
      addToCart({
        ...cartItem,
        selectedAdditionalDeliveryTime: filtered,
      })
    );
  };

  const handleSubmit = () => {
    navigate(`/order/social-media-service/checkout/${id}#checkout`);
  };

  return (
    <Layout title="Overview">
      {isFetching ? (
        <Loader />
      ) : (
        <Box id="review" className="bg-section__bg_color h-full">
          <SectionBanner
            heading="Take a look at what you've added"
            desc="Pay and we'll post your contest in our marketplace."
          />

          {!data && !isFetching ? (
            <Box className="flex justify-center items-center w-full h-[10vh]">
              No data found!
            </Box>
          ) : (
            <Box className="container py-10">
              <Box className="max-w-[1000px] w-full mx-auto">
                <Box className="flex justify-between">
                  <Box className="basis-[35%] hidden lg:block">
                    <Typography variant="h5" component="h5">
                      Summary
                    </Typography>
                  </Box>

                  <Box className="flex-grow">
                    <Box className="flex justify-between">
                      <span>{packageData?.title}</span>
                      <span>${packagePriceConversion(packageData)}</span>
                    </Box>

                    <Divider className="my-2" />
                    <Box className="flex justify-between">
                      <span>Total</span>
                      <span className="text-brand__font__size__lg">
                        ${totalPrice} USD
                      </span>
                    </Box>
                  </Box>
                </Box>

                <Divider className="my-10" />

                <Box className="flex justify-between">
                  <Box className="basis-[35%] hidden lg:block">
                    <Typography variant="h5" component="h5">
                      Integrated features
                    </Typography>
                  </Box>

                  <Box className="flex-grow flex justify-between">
                    <Box></Box>
                    <List>
                      {packageData?.featuredItems.map((item) => (
                        <MenuItem
                          key={item}
                          className="flex items-center gap-x-4"
                        >
                          <span className="basis-[10%] text-primary">
                            <DoneIcon fontSize="" />
                          </span>
                          <span className="basis-[90%] text-end">{item}</span>
                        </MenuItem>
                      ))}
                    </List>
                  </Box>
                </Box>

                <Divider className="my-10" />
                <Box className="flex justify-between">
                  <Box className="basis-[35%] hidden lg:block">
                    <Typography variant="h5" component="h5">
                      Additional
                    </Typography>
                  </Box>

                  <Box className="flex-grow flex flex-col items-end gap-5">
                    <Box className="flex flex-col">
                      <FormLabel className="text-end mr-4">Features</FormLabel>

                      {additionalFeatureObj?.additionalItems?.length > 0 ? (
                        <List>
                          {additionalFeatureObj?.additionalItems.map((item) => (
                            <MenuItem
                              key={item?.label}
                              onClick={() => handleRemoveAdditionalFeat(item)}
                              className="flex items-center gap-x-4"
                            >
                              <span className="basis-[10%] text-error">
                                <RemoveIcon fontSize="" />
                              </span>
                              <span className="basis-[90%] text-end">
                                {item?.label} (${item?.price})
                              </span>
                            </MenuItem>
                          ))}
                        </List>
                      ) : (
                        <MenuItem>
                          <HashLink
                            to={`/order/social-media-service/add-ons/${id}#add-ons`}
                            scroll={(el) => scrollWithOffset(el, 135)}
                            className="flex items-center gap-x-1 text-blue-500"
                          >
                            <AddCircleOutlineIcon fontSize="small" />
                            <span>Add Item</span>
                          </HashLink>
                        </MenuItem>
                      )}
                    </Box>

                    <Box className="flex flex-col">
                      <FormLabel className="text-end mr-4">Revision</FormLabel>

                      {additionalRevisionObj?.additionalItems?.length > 0 ? (
                        <List>
                          {additionalRevisionObj?.additionalItems.map(
                            (item) => (
                              <MenuItem
                                key={item?.label}
                                onClick={() =>
                                  handleRemoveAdditionalRevision(item)
                                }
                                className="flex items-center gap-x-4"
                              >
                                <span className="basis-[10%] text-error">
                                  <RemoveIcon fontSize="" />
                                </span>
                                <span className="basis-[90%] text-end">
                                  {item?.label} (${item?.price})
                                </span>
                              </MenuItem>
                            )
                          )}
                        </List>
                      ) : (
                        <MenuItem>
                          <HashLink
                            to={`/order/social-media-service/add-ons/${id}#add-ons`}
                            scroll={(el) => scrollWithOffset(el, 135)}
                            className="flex items-center gap-x-1 text-blue-500"
                          >
                            <AddCircleOutlineIcon fontSize="small" />
                            <span>Add Item</span>
                          </HashLink>
                        </MenuItem>
                      )}
                    </Box>

                    <Box className="flex flex-col">
                      <FormLabel className="text-end mr-4">Delivery</FormLabel>

                      {additionalDeliveryObj?.additionalItems?.length > 0 ? (
                        <List>
                          {additionalDeliveryObj?.additionalItems.map(
                            (item) => (
                              <MenuItem
                                key={item?.label}
                                onClick={() =>
                                  handleRemoveAdditionalDeliverTime(item)
                                }
                                className="flex items-center gap-x-4"
                              >
                                <span className="basis-[10%] text-error">
                                  <RemoveIcon fontSize="small" />
                                </span>
                                <span className="basis-[90%] text-end">
                                  {item?.label} (${item?.price})
                                </span>
                              </MenuItem>
                            )
                          )}
                        </List>
                      ) : (
                        <MenuItem>
                          <HashLink
                            to={`/order/social-media-service/add-ons/${id}#add-ons`}
                            scroll={(el) => scrollWithOffset(el, 135)}
                            className="flex items-center gap-x-1 text-blue-500"
                          >
                            <AddCircleOutlineIcon fontSize="" />
                            <span>Add Item</span>
                          </HashLink>
                        </MenuItem>
                      )}
                    </Box>
                  </Box>
                </Box>

                <Divider className="my-10" />

                <Box className="flex justify-between">
                  <Box className="basis-[35%] hidden lg:block">
                    <Typography variant="h5" component="h5">
                      Attached assets
                    </Typography>
                  </Box>

                  <Box className="flex-grow flex gap-y-5 flex-col items-end">
                    <Box>
                      <Typography
                        variant="p"
                        component="p"
                        className="text-end mb-2"
                      >
                        Reference
                      </Typography>
                      <Box className="flex justify-end gap-1">
                        {cartItem?.brief?.referredImages.map((item) => (
                          <img
                            key={item?.id}
                            className="max-w-[100px] w-full"
                            src={item?.url}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <AppBar
                  position="fixed"
                  className="bg-white"
                  sx={{ top: "auto", bottom: 0 }}
                >
                  <Toolbar>
                    <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center gap-3">
                      <OrderStepper2 value={80} />

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
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
}
