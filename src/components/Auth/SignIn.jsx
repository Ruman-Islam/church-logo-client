import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useCookie from "../../hooks/useCookie";
import useToast from "../../hooks/useToast";
import { useSignInMutation } from "../../services/features/auth/authApi";
import { setAuth } from "../../services/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignIn({ showForm }) {
  const { handleSuccess, handleError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const navigate = useNavigate();
  const location = useLocation();
  const isSignIn = showForm.includes("sign-in");
  const from = location.state?.from?.pathname || "/";
  const { handleSetCookie } = useCookie();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { data, error, isLoading }] = useSignInMutation();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);

  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
      handleSetCookie(data?.data?.refreshToken);
      dispatch(setAuth(data?.data));
    }
    if (error) {
      handleError(error?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onSubmit = async (signInData) => {
    const options = {
      data: signInData,
    };
    await signIn(options);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

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
            size="small"
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
              // pattern: {
              //   value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
              //   message: "At least 6 characters and a symbol",
              // },
            })}
            variant="outlined"
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            size="small"
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

          <div className="mt-1.5 text-text__gray text-center hover:text-blue-400 duration-200">
            <HashLink className="underline" to="/forget-password">
              <Typography variant="overline" display="block">
                Forgot password?
              </Typography>
            </HashLink>
          </div>
        </div>
      </form>
    </div>
  );
}
