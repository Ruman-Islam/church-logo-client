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
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import { countries } from "../../../constants/countries";
import useAutomaticScrollWithOffset from "../../../hooks/useAutomaticScrollWithOffset";
import { setLogoDesignBrief } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";
import { packagePriceConversion } from "../../../utils/packagePriceConversion";
import OrderStepper2 from "../components/OrderStepper2";

export default function OrderCheckout() {
  useAutomaticScrollWithOffset();
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartItem = useMemo(() => {
    return cartItems?.find((item) => item.category === "logo-design");
  }, [cartItems]);

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

  const { data, isLoading } = useGetOnePackageQuery(cartItem?.packageId);
  const packageData = data?.data;

  useEffect(() => {
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
        (accumulator, currentValue) => accumulator + currentValue?.price,
        0
      )
    : 0;

  const totalPrice =
    packagePriceConversion(packageData) +
    totalPriceOfAdditionalDelivery +
    totalPriceOfAdditionalRevision +
    totalPriceOfAdditionalFeats;

  const onSubmit = (formData) => {
    const email = formData.email;
    delete formData.email;

    const order = {
      ...cartItem,
      additionalEmail: email,
      contactDetails: {
        ...formData,
        country: data?.country || country?.country,
      },
    };

    dispatch(setLogoDesignBrief(order));
    navigate(`/order/logo-design/payment#payment`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout title="Checkout">
      <Box id="checkout" className="bg-section__bg_color h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Box className="flex flex-col md:flex-row justify-between gap-5">
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
                            helperText={getAuthErrorMessage(errors, "lastName")}
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
                          helperText={getAuthErrorMessage(errors, "email")}
                        />
                      </FormControl>
                    </Box>

                    <Box className="flex-grow">
                      <Typography variant="h6" component="h6" className="mb-2">
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
                          helperText={getAuthErrorMessage(errors, "phone")}
                        />
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          <AppBar
            position="fixed"
            className="bg-section__bg_color"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar>
              <Box className="max-w-[1000px] w-full mx-auto flex justify-between items-center gap-2">
                <OrderStepper2 value={100} />

                <Button
                  type="submit"
                  disabled={
                    !firstName ||
                    !lastName ||
                    !email ||
                    !phone ||
                    !country?.country ||
                    !countryCode
                  }
                  onClick={handleSubmit}
                  className={`${
                    !firstName ||
                    !lastName ||
                    !email ||
                    !phone ||
                    !country?.country ||
                    !countryCode
                      ? "bg-text__gray"
                      : "bg-primary hover:bg-brand__black__color"
                  } text-white px-10 rounded-full font-brand__font__600`}
                >
                  Complete
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </form>
      </Box>
    </Layout>
  );
}
