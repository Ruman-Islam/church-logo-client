import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../components/common/Layout";
import SectionBanner from "../../../components/common/SectionBanner";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";
import OrderStepper from "../components/OrderStepper";

// const industries = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

const AvatarInput = styled.div``;

export default function OrderBriefScreen() {
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // const [industry, setIndustry] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);

  const handleImage = (files) => {
    setRelatedImages((prev) => [...files.base64, ...prev]);
  };

  const handleRemoveImage = (img) => {
    return setRelatedImages(relatedImages.filter((item) => item !== img));
  };

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      logoDesc: data.logo_desc,
      logoName: data.logo_name,
      logoNote: data.logo_note,
      logoSlogan: data.logo_slogan,
      relatedImages,
    };

    console.log(formattedData);
    navigate("/order/color#color-design");
  };

  return (
    <Layout title="Your design brief">
      <Box id="order-brief">
        <SectionBanner
          heading="Logo & brand identity pack brief"
          desc="Fill out the brief so the designers know what you‘re looking for."
        />

        <Box className="container mb-10">
          <Box className="py-10">
            <OrderStepper activeStep={0} />
          </Box>

          <Box>
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
                        Do you have a slogan you want incorporated in your logo?
                      </Typography>

                      <FormControl fullWidth>
                        <TextField
                          {...register("logo_slogan")}
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
                        Describe what your organization or product does and its
                        target audience<span className="text-error">*</span>
                      </Typography>

                      <FormControl fullWidth>
                        <TextField
                          {...register("logo_desc", {
                            required: true,
                          })}
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

                    {/* <Box>
                      <Typography variant="h6" component="h6">
                        Industry
                      </Typography>
                      <FormControl fullWidth>
                        <Select
                          {...register("industry")}
                          id="industry"
                          name="industry"
                          size="small"
                          displayEmpty
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          <MenuItem value="">Select</MenuItem>
                          {industries.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box> */}
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
                        Is there anything else you would like to communicate to
                        the designers?
                      </Typography>

                      <FormControl fullWidth>
                        <TextField
                          {...register("logo_note")}
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
                        Do you have any images, sketches or documents that might
                        be helpful?
                      </Typography>

                      <AvatarInput className="mt-2.5 flex flex-wrap justify-center md:justify-start gap-1">
                        {relatedImages.length > 0
                          ? relatedImages.map((img) => (
                              <Box
                                className="border w-[180px] h-[180px] group relative"
                                key={img}
                              >
                                <img
                                  src={img}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></div>
                                <DeleteIcon
                                  onClick={() => handleRemoveImage(img)}
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
                            <span>Select your files</span>
                            <span>here</span>
                          </Box>
                        </ReactFileReader>
                      </AvatarInput>
                    </Box>
                  </Box>
                </Box>

                <Box className="flex justify-end mt-10">
                  <Button
                    type="submit"
                    className="bg-brand__black__color text-white"
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
