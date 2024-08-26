import LockResetIcon from "@mui/icons-material/LockReset";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/common/Layout";
import useCookie from "../../hooks/useCookie";
import useToast from "../../hooks/useToast";
import { useResetPasswordMutation } from "../../services/features/auth/authApi";
import { setAuth } from "../../services/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";

export default function ResetPasswordScreen() {
  const { token } = useParams();
  const { handleSetCookie } = useCookie();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);
  const { handleSuccess, handleError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/.test(
    password
  );

  const [resetPassword, { data, isLoading, error }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  }, [auth.user, from, navigate]);

  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
      handleSetCookie(data?.data?.refreshToken);
      dispatch(setAuth(data?.data));
    }
    if (error?.status) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data) => {
    data.token = token;

    await resetPassword({ data });
  };

  return (
    <Layout
      title="Reset Password"
      showHeader={false}
      showFooter={false}
      sectionHeight="100vh"
    >
      <Box className="h-full w-full flex flex-col items-center justify-center">
        <Box className="bg-white p-10 max-w-[500px] w-full shadow-lg border-t-4 border-primary rounded-md">
          <Box className="w-full flex flex-col items-center">
            <LockResetIcon className="text-brand__font__size__xl text-primary mb-2" />
            <Typography
              variant="caption"
              className="text-brand__font__size__lg text-primary font-brand__font__semibold"
            >
              Reset Password
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Box>
              <Box className="flex items-center justify-between mt-4">
                <Box className="w-full">
                  <FormControl fullWidth>
                    <TextField
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                        onChange: (e) => setPassword(e.target.value),
                      })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      label="New password"
                      type={showPassword ? "text" : "password"}
                      placeholder="● ● ● ● ● ●"
                      size="small"
                      error={!!getAuthErrorMessage(errors, "password")}
                      helperText={
                        getAuthErrorMessage(errors, "password") ||
                        "Password must contain one special character and minimum six characters."
                      }
                    />
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Button
              disabled={!isPassword}
              type="submit"
              className={`${
                !isPassword
                  ? "bg-text__gray"
                  : "bg-primary hover:bg-brand__black__color"
              } w-full cursor-pointer mt-3 text-white duration-300 font-brand__font__600`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
}
