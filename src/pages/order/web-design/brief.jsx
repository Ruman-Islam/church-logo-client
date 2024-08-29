import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import SectionBanner from "../../../components/common/SectionBanner";
import { addToCart } from "../../../services/features/cart/cartSlice";
import { useGetOnePackageQuery } from "../../../services/features/package/packageApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { generateRandomId } from "../../../utils/generateRandomId";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";
import { tagFinder } from "../../../utils/tagFinder";
import OrderStepper2 from "../components/OrderStepper2";

const AvatarInput = styled.div``;

export default function OrderBriefScreen() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const {
    cart: { cartItems },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cartItem = cartItems?.find((item) => item.category === "web-design");

  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    cartItem?.additionalEmail || user?.email || ""
  );
  const [demoWebsiteData, setDemoWebsiteData] = useState(
    tagFinder("demo_website_data", cartItem)
  );
  const [hasHostingSetup, setHasHostingSetup] = useState(
    !!tagFinder("domain_hosting_data", cartItem) || false
  );
  const [domainHostingData, setDomainHostingData] = useState(
    tagFinder("domain_hosting_data", cartItem)
  );
  const [websiteDesc, setWebsiteDesc] = useState(
    tagFinder("website_desc", cartItem)
  );
  const [websiteNote, setWebsiteNote] = useState(
    tagFinder("website_note", cartItem)
  );
  const [referredImages, setReferredImages] = useState(
    cartItem?.brief?.referredImages.length
      ? cartItem?.brief?.referredImages
      : []
  );

  const { data, isFetching } = useGetOnePackageQuery(id);

  const handleImage = (files) => {
    setReferredImages((prev) => [
      ...files.base64.map((url) => ({
        id: generateRandomId(),
        url,
      })),
      ...prev,
    ]);
  };

  const handleRemoveImage = (img) => {
    return setReferredImages(
      referredImages.filter((item) => item.id !== img.id)
    );
  };

  const onSubmit = async (data) => {
    const order = {
      ...cartItem,
      packageId: id,
      category: "web-design",
      additionalEmail: data.email,
      userId: user?.userId ? user?.userId : null,
      referredImages: referredImages,
      requirements: [
        {
          tag: "domain_hosting_data",
          question: "Do you have a setup domain and hosting?",
          answer: data.domain_hosting_data || "",
        },
        {
          tag: "demo_website_data",
          question:
            "Share any inspirational, competitor or similar website link",
          answer: data.demo_website_data,
        },
        {
          tag: "website_desc",
          question: "Briefly describe about your website",
          answer: data.website_desc,
        },
        {
          tag: "website_note",
          question:
            "Is there anything else you would like to communicate to the developer?",
          answer: data.website_note,
        },
      ],
    };

    dispatch(addToCart(order));

    navigate(`/order/web-design/add-ons#add-ons`);
  };


  return (
    <Layout title="Your design brief">
      {isFetching ? (
        <Loader />
      ) : (
        <Box id="order-brief" className="bg-section__bg_color h-full">
          <SectionBanner
            heading="Logo & brand identity pack brief"
            desc="Fill out the brief so the designers know what you‘re looking for."
          />
          {!data && !isFetching ? (
            <Box className="flex justify-center items-center w-full h-[50vh]">
              No data found!
            </Box>
          ) : (
            <Box className="container py-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="max-w-[1000px] w-full mx-auto">
                  <Box className="flex justify-between">
                    <Box className="basis-[35%] hidden lg:block">
                      <Typography variant="h5" component="h5">
                        Email
                      </Typography>
                    </Box>
                    <Box className="flex-grow">
                      <Typography variant="h6" component="h6">
                        Enter your email and we&rsquo;ll save your work
                        <span className="text-error">*</span>
                      </Typography>

                      <FormControl fullWidth>
                        <TextField
                          {...register("email", {
                            required: true,
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Enter valid email",
                            },
                          })}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2"
                          variant="outlined"
                          id="email"
                          name="email"
                          type="text"
                          placeholder="john@example.com"
                          error={!!getAuthErrorMessage(errors, "email")}
                          helperText={
                            getAuthErrorMessage(errors, "email")
                              ? getAuthErrorMessage(errors, "email")
                              : "We'll hold your data according to our Privacy Policy."
                          }
                        />
                      </FormControl>
                    </Box>
                  </Box>

                  <Divider className="my-10" />

                  <Box className="flex justify-between">
                    <Box className="basis-[35%] hidden lg:block">
                      <Typography variant="h5" component="h5">
                        Background information
                      </Typography>
                    </Box>
                    <Box className="flex-grow flex flex-col gap-10">
                      <Box>
                        <Typography variant="h6" component="h6">
                          Do you have a setup domain and hosting?
                        </Typography>

                        <FormControl fullWidth>
                          <RadioGroup
                            value={hasHostingSetup}
                            onChange={(e) =>
                              setHasHostingSetup(e.target.value === "true")
                            }
                          >
                            <Box>
                              <FormControlLabel
                                value={true}
                                control={<Radio />}
                                label="Yes"
                              />
                              <FormControlLabel
                                value={false}
                                control={<Radio />}
                                label="No"
                              />
                            </Box>
                          </RadioGroup>

                          {hasHostingSetup ? (
                            <Box className="mt-2">
                              <Typography
                                variant="p"
                                component="p"
                                className="text-brand__font__size__sm text-text__gray"
                              >
                                Please provide us your cPanel/hosting access
                                <span className="text-error">*</span>
                              </Typography>
                              <Box>
                                <TextField
                                  {...register("domain_hosting_data", {
                                    required: true,
                                  })}
                                  value={domainHostingData}
                                  onChange={(e) =>
                                    setDomainHostingData(e.target.value)
                                  }
                                  className="mt-1 w-full"
                                  variant="outlined"
                                  id="domain_hosting_data"
                                  name="domain_hosting_data"
                                  type="text"
                                  multiline
                                  minRows={3}
                                  size="small"
                                  error={
                                    !!getAuthErrorMessage(
                                      errors,
                                      "domain_hosting_data"
                                    )
                                  }
                                  helperText={
                                    getAuthErrorMessage(
                                      errors,
                                      "domain_hosting_data"
                                    )
                                      ? getAuthErrorMessage(
                                          errors,
                                          "domain_hosting_data"
                                        )
                                      : "Note: Enter the user name and password to gain access to the hosting root."
                                  }
                                />
                              </Box>
                            </Box>
                          ) : (
                            <Typography
                              variant="p"
                              component="p"
                              className="text-text__gray"
                            >
                              <small>
                                <InfoOutlinedIcon fontSize="" /> Providing the
                                hosting access details through guidelines is
                                always an option.
                              </small>
                            </Typography>
                          )}
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          component="h6"
                          className="leading-tight"
                        >
                          Share any inspirational, competitor or similar website
                          link
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("demo_website_data")}
                            value={demoWebsiteData}
                            onChange={(e) => setDemoWebsiteData(e.target.value)}
                            className="mt-1 w-full"
                            variant="outlined"
                            id="demo_website_data"
                            name="demo_website_data"
                            type="text"
                            multiline
                            minRows={4}
                            size="small"
                            error={
                              !!getAuthErrorMessage(errors, "demo_website_data")
                            }
                            helperText={
                              getAuthErrorMessage(errors, "demo_website_data")
                                ? getAuthErrorMessage(
                                    errors,
                                    "demo_website_data"
                                  )
                                : "Tip: Sharing a sample website can let our developer better understand how to make your product."
                            }
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          component="h6"
                          className="leading-tight"
                        >
                          Briefly describe about your website
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("website_desc", {
                              required: true,
                            })}
                            value={websiteDesc}
                            onChange={(e) => setWebsiteDesc(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="website_desc"
                            name="website_desc"
                            type="text"
                            multiline
                            minRows={5}
                            size="large"
                            error={
                              !!getAuthErrorMessage(errors, "website_desc")
                            }
                            helperText={
                              getAuthErrorMessage(errors, "website_desc")
                                ? getAuthErrorMessage(errors, "website_desc")
                                : "E.g. We sell anvils and other industrial goods to manufacturing companies and hobbyists all over the world."
                            }
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>

                  <Divider className="my-10" />

                  <Box className="flex justify-between">
                    <Box className="basis-[35%] hidden lg:block">
                      <Typography variant="h5" component="h5">
                        Other
                      </Typography>
                    </Box>
                    <Box className="flex-grow flex flex-col gap-10">
                      <Box>
                        <Typography
                          variant="h6"
                          component="h6"
                          className="leading-tight"
                        >
                          Is there anything else you would like to communicate
                          to the developer?
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("website_note")}
                            value={websiteNote}
                            onChange={(e) => setWebsiteNote(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="website_note"
                            name="website_note"
                            type="text"
                            multiline
                            minRows={5}
                            size="large"
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          component="h6"
                          className="leading-tight"
                        >
                          Do you have any images or logos that might be helpful?
                        </Typography>

                        <AvatarInput className="mt-2.5 flex flex-wrap justify-center md:justify-start gap-1">
                          {referredImages.length > 0
                            ? referredImages.map((item) => (
                                <Box
                                  className="border w-[180px] h-[180px] group relative"
                                  key={item.id}
                                >
                                  <img
                                    src={item.url}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></div>
                                  <DeleteIcon
                                    onClick={() => handleRemoveImage(item)}
                                    fontSize="medium"
                                    className="absolute top-2 right-2 text-white hidden group-hover:block duration-200 cursor-pointer"
                                  />
                                </Box>
                              ))
                            : null}
                          <ReactFileReader
                            base64={true}
                            multipleFiles
                            handleFiles={handleImage}
                          >
                            <Box className="border-4 border-dotted hover:border-brand__black__color duration-300 w-[180px] h-[180px] flex flex-col items-center justify-center cursor-pointer text-text__gray">
                              <AddIcon
                                fontSize="large"
                                className="text-brand__black__color"
                              />
                              <span>Select your photos</span>
                              <span>here</span>
                            </Box>
                          </ReactFileReader>
                        </AvatarInput>
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
                        <OrderStepper2 value={0} />

                        <Button
                          disabled={
                            !email ||
                            !websiteDesc ||
                            (hasHostingSetup ? !domainHostingData : false)
                          }
                          type="submit"
                          className={`${
                            !email ||
                            !websiteDesc ||
                            (hasHostingSetup ? !domainHostingData : false)
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
          )}
        </Box>
      )}
    </Layout>
  );
}
