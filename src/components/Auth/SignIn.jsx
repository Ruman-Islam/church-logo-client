import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HashLink } from "react-router-hash-link";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { useSignInMutation } from "../../services/features/auth/authApi";
import toast from "react-hot-toast";
import useCookie from "../../hooks/useCookie";
import { setAuth } from "../../services/features/auth/authSlice";

export default function SignIn({ showForm }) {
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
  const [signIn, { data, error, isLoading }] = useSignInMutation();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);
console.log(user)
  useEffect(() => {
    if (data?.statusCode === 200) {
      toast.success("Login successful");
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
    await signIn(options);
  };

  const isSignIn = showForm.includes("sign-in");

  return (
    <div
      className={`w-full h-full px-4 absolute top-0 duration-500 ${
        isSignIn ? "translate-x-0 opacity-1" : "-translate-x-[100%] opacity-0"
      }`}
    >
      <GoogleLoginButton />

      <div className="text-center mb-2.5 text-brand__black__color font-brand__font__500 text-brand__font__size__lg">
        <h3>Sign In</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ width: "100%" }}>
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

          <div className="mt-0.5 text-center">
            <HashLink
              className="text-brand__font__size__xs underline text-link__color"
              to="/"
            >
              Forgot password?
            </HashLink>
          </div>
        </div>
      </form>
    </div>
  );
}
