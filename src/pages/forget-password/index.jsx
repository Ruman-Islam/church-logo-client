import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/common/Layout";
import useToast from "../../hooks/useToast";
import { useForgotPasswordMutation } from "../../services/features/auth/authApi";
import { useAppSelector } from "../../services/hook";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";

export default function ForgetPasswordScreen() {
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
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const [forgotPassword, { data, isLoading, error }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  }, [auth.user, from, navigate]);

  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
    }
    if (error) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onSubmit = async (data) => {
    setIsSent(true);
    await forgotPassword({ data });
  };

  return (
    <Layout
      title="Forget Password"
      showHeader={false}
      showFooter={false}
      sectionHeight="100vh"
    >
      <Box className="h-full w-full flex flex-col items-center justify-center">
        <Box className="bg-white p-10 max-w-[500px] w-full shadow-lg border-t-4 border-primary rounded-md">
          <Link to={-1}>
            {" "}
            <ArrowBackIcon className="text-brand__font__size__lg text-primary" />
          </Link>

          <Box className="w-full flex flex-col items-center">
            <LockClockOutlinedIcon className="text-brand__font__size__xl text-primary mb-2" />
            <Typography
              variant="caption"
              className="text-brand__font__size__lg text-primary font-brand__font__semibold"
            >
              Forgot Password?
            </Typography>
            <p className="text-brand__font__size__sm text-center text-brand__detail__text leading-snug my-3 text-text__gray">
              Please enter your email address which you have registered and
              we&rsquo;ll send you a link to reset your password.
            </p>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Box>
              <Box className="flex items-center justify-between">
                <Box className="w-full">
                  <FormControl fullWidth>
                    <TextField
                      {...register("email", {
                        required: true,
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter valid email",
                        },
                        onChange: (e) => setEmail(e.target.value),
                      })}
                      className="mt-2"
                      variant="outlined"
                      label="Email"
                      size="small"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="john@example.com"
                      error={!!getAuthErrorMessage(errors, "email")}
                      helperText={getAuthErrorMessage(errors, "email")}
                    />
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Button
              disabled={!isEmail}
              type="submit"
              className={`${
                !isEmail
                  ? "bg-text__gray"
                  : "bg-primary hover:bg-brand__black__color"
              } w-full cursor-pointer mt-3 text-white duration-300 font-brand__font__600`}
            >
              {isLoading ? "Loading..." : isSent ? "Resend" : "Send"}
            </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
}
