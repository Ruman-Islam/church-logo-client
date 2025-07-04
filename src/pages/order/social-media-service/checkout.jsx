import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import { env } from "../../../config/env";
import { countries } from "../../../constants/countries";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import useToast from "../../../hooks/useToast";
import {
  addToCart,
  removeFromCart,
} from "../../../services/features/cart/cartSlice";
import { useSubmitOrderMutation } from "../../../services/features/order/orderApi";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { calculateAdditionalItemPrice } from "../../../utils/calculateAdditionalItemPrice";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";
import { packagePriceConversion } from "../../../utils/packagePriceConversion";
import OrderStepper2 from "../components/OrderStepper2";

export default function OrderCheckout() {
  useAutomaticScrollWithOffset();
  const {
    auth: { user },
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSuccess, handleError } = useToast();

  const cartItem = cartItems?.find(
    (item) => item.category === "social-media-service"
  );

  const [firstName, setFirstName] = useState(
    cartItem?.contactDetails?.firstName || user?.firstName || ""
  );
  const [lastName, setLastName] = useState(
    cartItem?.contactDetails?.lastName || user?.lastName || ""
  );
  const [phone, setPhone] = useState(
    cartItem?.contactDetails?.phone || user?.phone || ""
  );
  const [email, setEmail] = useState(
    cartItem?.additionalEmail || user?.email || ""
  );
  const [country, setCountry] = useState({
    country: user?.country || "",
  });

  const filteredCountry = countries.find(
    (c) => c?.country === country?.country
  );

  const countryCode = filteredCountry?.dialCode;

  const { data, isFetching } = useGetOnePackageQuery(id);
  const packageData = data?.data;

  const [
    submitOrder,
    { data: submitData, isLoading: submitLoading, error: submitError },
  ] = useSubmitOrderMutation();

  useEffect(() => {
    if (cartItem && user?.userId) {
      dispatch(
        addToCart({
          ...cartItem,
          userId: user.userId,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitData) {
      dispatch(removeFromCart(cartItem));
      handleSuccess(submitData?.message);
      // navigate("/dashboard#dashboard");
      Swal.fire({
        title: "<strong>Order has been placed!</strong>",
        icon: "success",
        html: `
    <div>
      <p style="margin-bottom:10px">Hi, ${user?.firstName} ${user?.lastName}</p>
      <p style="margin-bottom:10px">Thanks for your order! We'll get to this as soon as we can.</p>
        Contact us:
        <a style="text-decoration:underline;" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=churchlogo.info@gmail.com" target="_blank">Email</a> /
        <a style="text-decoration:underline;" href="/dashboard#dashboard">Live chat</a>
    </div>
    `,
        showCloseButton: true,
        confirmButtonText: `<a href="/dashboard#dashboard">Dashboard</a>`,
      });
    }
    if (submitError) {
      handleError(submitError?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitData, submitError]);

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

  const onSubmit = async (formData) => {
    const email = formData?.email;
    delete formData.email;

    const order = {
      ...cartItem,
      additionalEmail: email,
      contactDetails: {
        ...formData,
        country: country?.country,
        phone: countryCode + "-" + formData?.phone,
      },
    };

    const referredImages = order?.referredImages || [];

    const uploadedReferredImages = [];

    for (const element of referredImages) {
      const formData = new FormData();
      formData.append("upload_preset", env?.cloud_upload_preset);
      formData.append("cloud_name", env?.cloud_upload_name);
      formData.append("folder", "church-logo/customer-order");
      formData.append("file", element?.url);

      try {
        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${env?.cloud_upload_name}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        uploadedReferredImages.push({
          displayName: data?.display_name,
          publicId: data?.public_id,
          secureUrl: data?.secure_url,
        });
      } catch (error) {
        handleError("Something went wrong!");
      }
    }

    order.referredImages = uploadedReferredImages;

    await submitOrder({ data: order });
  };

  return (
    <Layout title="Checkout">
      {isFetching ? (
        <Loader />
      ) : (
        <Box id="checkout" className="bg-section__bg_color h-full">
          <SectionBanner
            heading="Your details"
            desc="Fill out your details, pay and we'll post your contest in our marketplace."
          />

          {!data && !isFetching ? (
            <Box className="flex justify-center items-center w-full h-[10vh]">
              No data found!
            </Box>
          ) : (
            <Box>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10"
              >
                <Box className="max-w-[1000px] w-full mx-auto py-10 container">
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
                      <Box className="flex flex-col md:flex-row justify-between gap-5">
                        <Box className="flex-grow">
                          <Typography variant="h6" component="h6">
                            First Name
                            <span className="text-error">*</span>
                          </Typography>

                          <FormControl fullWidth>
                            <TextField
                              {...register("firstName", {
                                required: true,
                              })}
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
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
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="mt-2"
                              variant="outlined"
                              id="lastName"
                              name="lastName"
                              type="text"
                              error={!!getAuthErrorMessage(errors, "lastName")}
                              helperText={getAuthErrorMessage(
                                errors,
                                "lastName"
                              )}
                            />
                          </FormControl>
                        </Box>
                      </Box>
                      <Box className="flex-grow">
                        <Typography variant="h6" component="h6">
                          Email
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("email", {
                              required: true,
                            })}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="email"
                            name="email"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "email")}
                            helperText={
                              getAuthErrorMessage(errors, "email") ||
                              "Make sure your email is correct, an invoice will be sent."
                            }
                          />
                        </FormControl>
                      </Box>

                      <Box className="flex-grow">
                        <Typography
                          variant="h6"
                          component="h6"
                          className="mb-2"
                        >
                          Country
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <Autocomplete
                            disableClearable={true}
                            options={countries}
                            getOptionLabel={({ country }) => country}
                            value={country}
                            onChange={(event, selectedOption) =>
                              setCountry(selectedOption)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...register("country")}
                                {...params}
                                placeholder="E.g - United States"
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
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  {countryCode}
                                </InputAdornment>
                              ),
                            }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="E.g - 123xxx"
                            className="mt-2"
                            variant="outlined"
                            id="phone"
                            name="phone"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "phone")}
                            helperText={
                              getAuthErrorMessage(errors, "phone") ||
                              "Make sure your phone number is correct for further discussion."
                            }
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
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
                      <OrderStepper2 value={100} />

                      <Button
                        type="submit"
                        disabled={
                          !firstName ||
                          !lastName ||
                          !email ||
                          !phone ||
                          !country?.country ||
                          !countryCode ||
                          submitLoading
                        }
                        onClick={handleSubmit}
                        className={`${
                          !firstName ||
                          !lastName ||
                          !email ||
                          !phone ||
                          !country?.country ||
                          !countryCode ||
                          submitLoading
                            ? "bg-text__gray"
                            : "bg-primary hover:bg-brand__black__color"
                        } text-white px-10 rounded-full font-brand__font__600`}
                      >
                        {submitLoading ? "Loading..." : "Complete"}
                      </Button>
                    </Box>
                  </Toolbar>
                </AppBar>
              </form>
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
}
