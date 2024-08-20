import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import { countryCodes } from "../../../constants/countryCodes";
import { setLogoDesignBrief } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";
import { packagePriceConversion } from "../../../utils/packagePriceConversion";
import OrderStepper2 from "../components/OrderStepper2";

export default function LogoDesignCheckout() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartItem = useMemo(() => {
    return cartItems?.find((item) => item.category === "logo-design");
  }, [cartItems]);

  const { data, isLoading } = useGetOnePackageQuery(cartItem?.packageId);
  const packageData = data?.data;

  useEffect(() => {
    setValue("firstName", user?.firstName);
    setValue("lastName", user?.lastName);
    if (cartItem && user?.userId) {
      dispatch(
        setLogoDesignBrief({
          ...cartItem,
          userId: user.userId,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedAdditionalFeats = cartItem?.selectedAdditionalFeats;
  const selectedAdditionalRevision = cartItem?.selectedAdditionalRevision;
  const selectedAdditionalDeliveryTime =
    cartItem?.selectedAdditionalDeliveryTime;

  const totalPriceOfAdditionalDelivery =
    selectedAdditionalDeliveryTime?.price || 0;

  const totalPriceOfAdditionalRevision = selectedAdditionalRevision?.price || 0;

  const totalPriceOfAdditionalFeats = selectedAdditionalFeats
    ? selectedAdditionalFeats.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      )
    : 0;

  const totalPrice = Math.ceil(
    packagePriceConversion(packageData) +
      totalPriceOfAdditionalDelivery +
      totalPriceOfAdditionalRevision +
      totalPriceOfAdditionalFeats
  );

  const onSubmit = (formData) => {
    const order = {
      ...cartItem,
      contactDetails: formData,
    };

    dispatch(setLogoDesignBrief(order));
    // navigate(`/order/logo-design/checkout#checkout`);
  };

  console.log(cartItem);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout title="Checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box id="checkout">
          <SectionBanner
            heading="Your details"
            desc="Fill out your details, pay and we'll post your contest in our marketplace."
          />

          {!cartItem ? (
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

                <Divider className="my-10 md:my-20" />

                <Box className="flex justify-between">
                  <Box className="basis-[35%] hidden lg:block">
                    <Typography variant="h5" component="h5">
                      Contact details
                    </Typography>
                  </Box>

                  <Box className="flex-grow flex flex-col gap-5">
                    <Box className="flex justify-between gap-5">
                      <Box className="flex-grow">
                        <Typography variant="h6" component="h6">
                          Full Name
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("firstName", {
                              required: true,
                            })}
                            className="mt-2"
                            variant="outlined"
                            id="firstName"
                            name="firstName"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "firstName")}
                            helperText={getAuthErrorMessage(
                              errors,
                              "firstName"
                            )}
                          />
                        </FormControl>
                      </Box>
                      <Box className="flex-grow">
                        <Typography variant="h6" component="h6">
                          Last Name
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("lastName", {
                              required: true,
                            })}
                            className="mt-2"
                            variant="outlined"
                            id="lastName"
                            name="lastName"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "lastName")}
                            helperText={getAuthErrorMessage(errors, "lastName")}
                          />
                        </FormControl>
                      </Box>
                    </Box>
                    <Box className="flex flex-col justify-between gap-5">
                      <Box className="flex-grow">
                        <Typography
                          variant="h6"
                          component="h6"
                          className="mb-2"
                        >
                          Country code
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <Autocomplete
                            disablePortal
                            options={countryCodes}
                            getOptionLabel={({ country, code }) =>
                              `${country} ${code}`
                            }
                            renderInput={(params) => (
                              <TextField
                                {...register("countryCode", {
                                  required: true,
                                })}
                                {...params}
                                variant="outlined"
                                id="countryCode"
                                name="countryCode"
                                error={
                                  !!getAuthErrorMessage(errors, "countryCode")
                                }
                                helperText={getAuthErrorMessage(
                                  errors,
                                  "countryCode"
                                )}
                              />
                            )}
                          />
                        </FormControl>
                      </Box>
                      <Box className="flex-grow">
                        <Typography variant="h6" component="h6">
                          Phone number
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("phone", {
                              required: true,
                            })}
                            className="mt-2"
                            variant="outlined"
                            id="phone"
                            name="phone"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "phone")}
                            helperText={getAuthErrorMessage(errors, "phone")}
                          />
                        </FormControl>
                      </Box>
                      <Box className="flex-grow">
                        <Typography variant="h6" component="h6">
                          Company name
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("companyName", {
                              required: true,
                            })}
                            className="mt-2"
                            variant="outlined"
                            id="companyName"
                            name="companyName"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "companyName")}
                            helperText={getAuthErrorMessage(
                              errors,
                              "companyName"
                            )}
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <AppBar
                  position="fixed"
                  className="bg-section__bg_color"
                  sx={{ top: "auto", bottom: 0 }}
                >
                  <Toolbar>
                    <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center">
                      <OrderStepper2 value={80} />

                      <Button
                        onClick={handleSubmit}
                        className={`bg-brand__black__color text-white px-4 rounded-full`}
                      >
                        Continue
                      </Button>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Box>
            </Box>
          )}

          <AppBar
            position="fixed"
            className="bg-section__bg_color"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar>
              <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center">
                <OrderStepper2 value={100} />

                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className={`bg-brand__black__color hover:bg-[#313030] text-white px-4 rounded-full`}
                >
                  Complete
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </form>
    </Layout>
  );
}
