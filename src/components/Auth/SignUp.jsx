import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCookie from "../../hooks/useCookie";
import { useSignUpMutation } from "../../services/features/auth/authApi";
import { setAuth } from "../../services/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignUp({ showForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const { handleSetCookie } = useCookie();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [signUp, { data, error, isLoading }] = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);

  useEffect(() => {
    if (data?.statusCode === 200) {
      toast.success("Registration successful");
      handleSetCookie(data?.data?.refreshToken);
      dispatch(setAuth(data?.data));
    }
    if (error?.status === 400) {
      toast.error(error?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    const options = {
      data: data,
    };
    await signUp(options);
  };

  const isSignUp = showForm.includes("sign-up");

  return (
    <div
      className={`w-full h-full px-4 absolute top-0 duration-500 ${
        isSignUp ? "translate-x-0 opacity-1" : "translate-x-[100%] opacity-0"
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
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email is not a valid email",
              },
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
              pattern: {
                value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                message: "At least 6 characters and a symbol",
              },
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
            {isLoading ? "Loading..." : "Submit"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
