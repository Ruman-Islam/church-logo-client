import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { env } from "../../../config/env";
import { countries } from "../../../constants/countries";
import useToast from "../../../hooks/useToast";
import {
  useEditPasswordMutation,
  useEditProfileImageMutation,
  useEditProfileMutation,
} from "../../../services/features/auth/authApi";
import { setAuth } from "../../../services/features/auth/authSlice";
import { useAppDispatch } from "../../../services/hook";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";

export default function AccountSettingEdit({ auth }) {
  const { handleSuccess, handleError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset,
    formState: { errors: errors2 },
  } = useForm();

  const dispatch = useAppDispatch();

  const [image, setImage] = useState(auth?.user?.photo?.url);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [firstName, setFirstName] = useState(auth?.user?.firstName || "");
  const [lastName, setLastName] = useState(auth?.user?.lastName || "");
  const [gender, setGender] = useState(auth?.user?.gender || "");
  const [address, setAddress] = useState(auth?.user?.address || "");
  const [designation, setDesignation] = useState(auth?.user?.designation || "");
  const [phone, setPhone] = useState(auth?.user?.phone || "");
  const [country, setCountry] = useState({
    country: auth?.user?.country || "",
  });

  const filteredCountry = countries.find(
    (c) => c?.country.toLowerCase() === country?.country.toLowerCase()
  );

  const countryCode = filteredCountry?.dialCode;

  const shouldUpdateBtnEnabled =
    firstName === auth?.user?.firstName &&
    lastName === auth?.user?.lastName &&
    gender === auth?.user?.gender &&
    address === auth?.user?.address &&
    designation === auth?.user?.designation &&
    phone === auth?.user?.phone &&
    country.country === auth?.user?.country;

  const shouldPassChangeBtnEnabled = !(currentPassword && newPassword);

  const [
    editProfile,
    {
      data: profileEditedData,
      isLoading: profileEditedLoading,
      error: profileEditedError,
    },
  ] = useEditProfileMutation();

  const [
    editProfileImage,
    { data: profileImageEditedData, error: profileImageEditedError },
  ] = useEditProfileImageMutation();

  const [
    editPassword,
    {
      data: passwordEditedData,
      isLoading: passwordEditedLoading,
      error: passwordEditedError,
    },
  ] = useEditPasswordMutation();

  useEffect(() => {
    if (profileEditedData) {
      dispatch(setAuth({ ...auth, user: profileEditedData?.data }));
      handleSuccess(profileEditedData?.message);
    }
    if (profileEditedError) {
      handleError(profileEditedError?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    profileEditedData?.data,
    profileEditedData?.message,
    profileEditedData?.statusCode,
    profileEditedError?.data?.message,
    profileEditedError?.status,
  ]);

  useEffect(() => {
    if (profileImageEditedData) {
      dispatch(
        setAuth({
          ...auth,
          user: {
            ...auth?.user,
            photo: profileImageEditedData?.data?.photo,
          },
        })
      );

      handleSuccess(profileImageEditedData?.message);
    }
    if (profileImageEditedError) {
      handleError(profileImageEditedError?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    profileImageEditedData?.data?.photo,
    profileImageEditedData?.message,
    profileImageEditedData?.statusCode,
    profileImageEditedError?.data?.message,
    profileImageEditedError?.status,
  ]);

  useEffect(() => {
    if (passwordEditedData) {
      reset();
      handleSuccess(passwordEditedData?.message);
    }
    if (passwordEditedError) {
      handleError(passwordEditedError?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    passwordEditedData?.data,
    passwordEditedData?.message,
    passwordEditedData?.statusCode,
    passwordEditedError?.data?.message,
    passwordEditedError?.status,
  ]);

  const handleShowCurrentPassword = () =>
    setShowCurrentPassword((show) => !show);

  const handleShowNewPassword = () => setShowNewPassword((show) => !show);

  const onLoadImage = (callBack, reader) => {
    reader.onload = () => {
      callBack(reader.result);
    };
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const formData = new FormData();

    if (file) {
      reader.readAsDataURL(file);
      onLoadImage(setImage, reader);
    }

    formData.append("upload_preset", env?.cloud_upload_preset);
    formData.append("cloud_name", env?.cloud_upload_name);
    formData.append("folder", "church-logo/profile-images");
    formData.append("file", e.target.files[0]);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${env?.cloud_upload_name}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = {
        publicId: response.data?.public_id,
        url: response.data?.secure_url,
        oldPublicId: auth?.user?.photo?.publicId || "",
      };
      setAuth({ ...auth, user: data?.data });
      await editProfileImage({ data });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      gender: data?.gender || gender,
      country: data?.country || country?.country,
    };

    await editProfile({ data: newData });
  };

  const onPasswordSubmit = async (data) => {
    await editPassword({ data });
  };

  return (
    <Box className="w-full p-6 flex flex-col gap-10">
      <Box className="flex justify-center lg:justify-start">
        <Box className="flex justify-between items-center w-[120px] h-[120px] flex-col relative cursor-pointer group shadow rounded-full ">
          <Avatar
            alt={auth?.user?.firstName}
            src={image || "/static/images/avatar/1.jpg"}
            sx={{ backgroundColor: "#FF5722" }}
            className="w-full h-full text-brand__font__size__lg2"
          />
          <Box className="text-white font-brand__font__semibold bg-brand__black__color bg-opacity-0 group-hover:bg-opacity-60 duration-300 absolute z-50 w-full h-full rounded-full flex items-center justify-center p-1 hover:p-0">
            <label
              htmlFor="photo"
              className="cursor-pointer items-center gap-x-1 opacity-0 group-hover:opacity-100 duration-300  w-full h-full rounded-full flex justify-center"
            >
              <CloudUploadIcon />
              <span className="text-brand__font__size__sm">Upload</span>
            </label>
            <input
              type="file"
              className="hidden"
              id="photo"
              onChange={handleImage}
            />
          </Box>
        </Box>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-col gap-8">
          <Box className="flex flex-col lg:flex-row items-center gap-8 lg:gap-3">
            <FormControl fullWidth>
              <TextField
                {...register("firstName", {
                  required: true,
                })}
                variant="outlined"
                label="First  Name"
                type="text"
                placeholder="E.g - John"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getAuthErrorMessage(errors, "firstName")}
                helperText={getAuthErrorMessage(errors, "firstName")}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                {...register("lastName", {
                  required: true,
                })}
                variant="outlined"
                label="Last Name"
                type="text"
                placeholder="E.g - Doe"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getAuthErrorMessage(errors, "lastName")}
                helperText={getAuthErrorMessage(errors, "lastName")}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <Autocomplete
                disableClearable={true}
                options={countries}
                getOptionLabel={({ country }) => country}
                value={country}
                onChange={(event, selectedOption) => setCountry(selectedOption)}
                renderInput={(params) => (
                  <TextField
                    {...register("country")}
                    {...params}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Country"
                    placeholder="E.g - United States"
                  />
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("phone")}
                variant="outlined"
                label="Phone"
                type="text"
                placeholder="E.g - 123xxxxxx"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {countryCode}
                    </InputAdornment>
                  ),
                  readOnly: countryCode ? false : true,
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                helperText={countryCode ? "" : "Please choose country."}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("address")}
                variant="outlined"
                label="Address"
                type="text"
                placeholder="E.g - CA 95134 San Jose"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <Autocomplete
                disableClearable={true}
                options={["Male", "Female", "Other"]}
                getOptionLabel={(gender) => gender}
                value={gender}
                onChange={(event, selectedOption) => setGender(selectedOption)}
                renderInput={(params) => (
                  <TextField
                    {...register("gender")}
                    {...params}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Gender"
                    placeholder="E.g - Male/Female"
                  />
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("designation")}
                variant="outlined"
                label="Designation"
                type="text"
                placeholder="E.g - Team Manager"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box className="flex justify-end">
            <Button
              disabled={profileEditedLoading || shouldUpdateBtnEnabled}
              type="submit"
              className={`${
                profileEditedLoading || shouldUpdateBtnEnabled
                  ? "bg-text__gray"
                  : "bg-primary hover:bg-brand__black__color"
              } text-white px-10 rounded-full font-brand__font__600`}
            >
              {profileEditedLoading ? "Loading..." : "Update"}
            </Button>
          </Box>
        </Box>
      </form>

      <Divider />

      <form onSubmit={handleSubmit2(onPasswordSubmit)}>
        <Box className="flex flex-col gap-8">
          <FormControl fullWidth>
            <TextField
              {...register2("currentPassword", {
                required: true,
                onChange: (e) => setCurrentPassword(e.target.value),
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowCurrentPassword} edge="end">
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              label="Current password"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="● ● ● ● ● ●"
              className="w-full"
              error={!!getAuthErrorMessage(errors2, "currentPassword")}
              helperText={getAuthErrorMessage(errors2, "currentPassword")}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              {...register2("newPassword", {
                required: true,
                pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                onChange: (e) => setNewPassword(e.target.value),
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowNewPassword} edge="end">
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              label="New password"
              type={showNewPassword ? "text" : "password"}
              placeholder="● ● ● ● ● ●"
              className="w-full"
              error={!!getAuthErrorMessage(errors2, "newPassword")}
              helperText={
                getAuthErrorMessage(errors2, "newPassword") ||
                "Password must contain one special character and minimum six characters."
              }
            />
          </FormControl>

          <Box className="flex justify-end">
            <Button
              disabled={passwordEditedLoading || shouldPassChangeBtnEnabled}
              type="submit"
              className={`${
                passwordEditedLoading || shouldPassChangeBtnEnabled
                  ? "bg-text__gray"
                  : "bg-primary hover:bg-brand__black__color"
              } text-white px-10 rounded-full font-brand__font__600`}
            >
              {passwordEditedLoading ? "Loading..." : "Change"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
