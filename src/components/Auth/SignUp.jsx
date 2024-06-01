import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";

export default function SignUp({ onShow }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div
      className={`w-full h-full px-4 absolute top-0 duration-500 ${
        onShow ? "translate-x-[100%] opacity-0" : "translate-x-0 opacity-1"
      }`}
    >
      <GoogleLoginButton />

      <div className="text-center mb-2.5 text-brand__black__color font-brand__font__500 text-brand__font__size__lg">
        <h3>Create Account</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <FormControl sx={{ width: "100%" }}>
            <TextField
              {...register("firstName", {
                required: "This field is required",
                maxLength: 15,
                minLength: 3,
              })}
              variant="outlined"
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              error={!!getAuthErrorMessage(errors, "firstName")}
              helperText={getAuthErrorMessage(errors, "firstName")}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              {...register("lastName", {
                required: true,
                maxLength: 15,
                minLength: 3,
              })}
              variant="outlined"
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              error={!!getAuthErrorMessage(errors, "lastName")}
              helperText={getAuthErrorMessage(errors, "lastName")}
            />
          </FormControl>
        </div>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="Email Address"
            error={!!getAuthErrorMessage(errors, "email")}
            helperText={getAuthErrorMessage(errors, "email")}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
            })}
            variant="outlined"
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            error={!!getAuthErrorMessage(errors, "password")}
            helperText={getAuthErrorMessage(errors, "password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <div className="mt-4">
          <CustomButton
            type="submit"
            className="border w-full rounded-full py-2 bg-primary hover:bg-brand__black__color text-white duration-300"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
