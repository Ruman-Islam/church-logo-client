import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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

  const cartItem = cartItems?.find((item) => item.category === "branding");

  const { id } = useParams();
  const navigate = useNavigate();
  const [logoName, setLogoName] = useState(tagFinder("logo_name", cartItem));
  const [logoDesc, setLogoDesc] = useState(tagFinder("logo_desc", cartItem));
  const [logoSlogan, setLogoSlogan] = useState(
    tagFinder("logo_slogan", cartItem)
  );
  const [logoNote, setLogoNote] = useState(tagFinder("logo_note", cartItem));
  const [referredImages, setReferredImages] = useState(
    cartItem?.brief?.referredImages.length
      ? cartItem?.brief?.referredImages
      : []
  );
  const [email, setEmail] = useState(
    cartItem?.additionalEmail || user?.email || ""
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
      category: "branding",
      additionalEmail: data.email,
      userId: user?.userId ? user?.userId : null,
      referredImages: referredImages,
      requirements: [
        {
          tag: "logo_name",
          question: "What name do you want in your logo?",
          answer: data.logo_name,
        },
        {
          tag: "logo_slogan",
          question: "Do you have a slogan you want incorporated in your logo?",
          answer: data.logo_slogan,
        },
        {
          tag: "logo_desc",
          question:
            "Describe what your organization or product does and its target audience",
          answer: data.logo_desc,
        },
        {
          tag: "logo_note",
          question:
            "Is there anything else you would like to communicate to the designers?",
          answer: data.logo_note,
        },
      ],
    };

    dispatch(addToCart(order));

    navigate(`/order/branding/design/${id}#design`);
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
                          What name do you want in your logo?
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("logo_name", {
                              required: true,
                            })}
                            value={logoName}
                            onChange={(e) => setLogoName(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="logo_name"
                            name="logo_name"
                            type="text"
                            error={!!getAuthErrorMessage(errors, "logo_name")}
                            helperText={
                              getAuthErrorMessage(errors, "logo_name")
                                ? getAuthErrorMessage(errors, "logo_name")
                                : "E.g. Acme"
                            }
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography variant="h6" component="h6">
                          Do you have a slogan you want incorporated in your
                          logo?
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("logo_slogan")}
                            value={logoSlogan}
                            onChange={(e) => setLogoSlogan(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="logo_slogan"
                            name="logo_slogan"
                            type="text"
                            helperText="Tip: Leave blank if you don't want one incorporated."
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography variant="h6" component="h6">
                          Describe what your organization or product does and
                          its target audience
                          <span className="text-error">*</span>
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("logo_desc", {
                              required: true,
                            })}
                            value={logoDesc}
                            onChange={(e) => setLogoDesc(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="logo_desc"
                            name="logo_desc"
                            type="text"
                            multiline
                            minRows={5}
                            size="large"
                            error={!!getAuthErrorMessage(errors, "logo_desc")}
                            helperText={
                              getAuthErrorMessage(errors, "logo_desc")
                                ? getAuthErrorMessage(errors, "logo_desc")
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
                        <Typography variant="h6" component="h6">
                          Is there anything else you would like to communicate
                          to the designers?
                        </Typography>

                        <FormControl fullWidth>
                          <TextField
                            {...register("logo_note")}
                            value={logoNote}
                            onChange={(e) => setLogoNote(e.target.value)}
                            className="mt-2"
                            variant="outlined"
                            id="logo_note"
                            name="logo_note"
                            type="text"
                            multiline
                            minRows={5}
                            size="large"
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Typography variant="h6" component="h6">
                          Do you have any images, sketches or documents that
                          might be helpful?
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
                          disabled={!email || !logoName || !logoDesc}
                          type="submit"
                          className={`${
                            !email || !logoName || !logoDesc
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
