import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { countries } from "../../../constants/countries";
import {
    useEditPasswordMutation,
    useEditProfileImageMutation,
    useEditProfileMutation,
} from "../../../services/features/auth/authApi";
import { setAuth } from "../../../services/features/auth/authSlice";
import { useAppDispatch } from "../../../services/hook";
import { getAuthErrorMessage } from "../../../utils/getAuthErrorMessage";

export default function AccountSettingEdit({ auth }) {
  const {
    register,
    handleSubmit,
    setValue,
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
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

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
    setValue("firstName", auth?.user?.firstName);
    setValue("lastName", auth?.user?.lastName);
    setValue("gender", auth?.user?.gender);
    setValue("address", auth?.user?.address);
    setValue("country", auth?.user?.country);
    setValue("phone", auth?.user?.phone);
  }, [auth, setValue]);

  useEffect(() => {
    if (profileEditedData) {
      dispatch(setAuth({ ...auth, user: profileEditedData?.data }));
      toast.success(profileEditedData?.message);
    }
    if (profileEditedError) {
      toast.error(profileEditedError?.data?.message);
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
      toast.success(profileImageEditedData?.message);
    }
    if (profileImageEditedError) {
      toast.error(profileImageEditedError?.data?.message);
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
      toast.success(passwordEditedData?.message);
    }
    if (passwordEditedError) {
      toast.error(passwordEditedError?.data?.message);
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

    formData.append(
      "upload_preset",
      import.meta.env.VITE_cloudinary_upload_preset
    );
    formData.append("cloud_name", import.meta.env.VITE_cloudinary_cloud_name);
    formData.append("folder", "church-logo/profile-images");
    formData.append("file", e.target.files[0]);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_cloudinary_cloud_name
        }/upload`,
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
    await editProfile({ data });
  };

  const onPasswordSubmit = async (data) => {
    await editPassword({ data });
  };

  return (
    <Box className="w-full p-6 flex flex-col gap-10">
      <Box className="flex justify-center lg:justify-start">
        <Box className="flex justify-between items-center w-[100px] h-[100px] flex-col relative cursor-pointer group shadow rounded-full">
          <Avatar
            alt={auth?.user?.firstName}
            src={image || "/static/images/avatar/1.jpg"}
            sx={{ backgroundColor: "#FF5722" }}
            className="w-full h-full text-brand__font__size__lg2"
          />
          <Box className="text-white font-brand__font__semibold bg-brand__black__color bg-opacity-0 group-hover:bg-opacity-60 duration-300 absolute z-50 w-full h-full rounded-full flex items-center justify-center">
            <label
              htmlFor="photo"
              className="cursor-pointer items-center gap-x-1 opacity-0 group-hover:opacity-100 duration-300 border w-full h-full rounded-full flex justify-center"
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
                label="First name"
                type="text"
                placeholder="E.g - John"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getAuthErrorMessage(errors, "firstName")}
                helperText={getAuthErrorMessage(errors, "firstName")}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                {...register("lastName", {
                  required: true,
                })}
                variant="outlined"
                label="Last name"
                type="text"
                placeholder="E.g - Doe"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getAuthErrorMessage(errors, "lastName")}
                helperText={getAuthErrorMessage(errors, "lastName")}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                {...register("gender", {
                  required: true,
                })}
                labelId="gender"
                defaultValue={auth?.user?.gender}
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
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
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="country">Country</InputLabel>
              <Select
                {...register("country", {
                  required: true,
                })}
                labelId="country"
                defaultValue={auth?.user?.country}
                placeholder="E.g - United States"
                label="Country"
              >
                {countries.map(({ country }) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("phone")}
                variant="outlined"
                label="Phone"
                type="text"
                placeholder="E.g - +8801xxxxxx"
                className="w-full"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Box>
          <Box className="flex justify-end">
            <Button
              disabled={profileEditedLoading}
              type="submit"
              className={`bg-primary hover:bg-brand__black__color text-white px-10 rounded-full font-brand__font__600`}
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
              disabled={passwordEditedLoading}
              type="submit"
              className={`bg-primary hover:bg-brand__black__color text-white px-10 rounded-full font-brand__font__600`}
            >
              {passwordEditedLoading ? "Loading..." : "Change"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
