import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PendingIcon from "@mui/icons-material/Pending";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/common/Layout";

import useToast from "../../hooks/useToast";
import { useConfirmEmailVerificationMutation } from "../../services/features/auth/authApi";
import { setAuth } from "../../services/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../services/hook";

export default function VerifyEmailScreen() {
  const { token } = useParams();
  const { auth } = useAppSelector((state) => state);

  const { handleSuccess, handleError } = useToast();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [message, setMessage] = useState("Confirm Email");

  const [confirmEmailVerification, { data, isLoading, error }] =
    useConfirmEmailVerificationMutation();

  useEffect(() => {
    if (data) {
      dispatch(setAuth({ ...auth, user: data?.data }));
      setMessage("Confirmed");
      handleSuccess(data?.message);

      const timer = setTimeout(() => {
        navigate("/profile");
      }, 3000); // 3000 ms = 3 seconds

      return () => clearTimeout(timer);
    }

    if (error?.status) {
      handleError(error?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleConfirmEmailVerification = async () => {
    const data = {
      token,
    };

    await confirmEmailVerification({ data });
  };

  return (
    <Layout
      title="Verify Email"
      showHeader={false}
      showFooter={false}
      sectionHeight="100vh"
    >
      <Box className="h-full w-full flex flex-col items-center justify-center bg-[url(https://c0.wallpaperflare.com/preview/847/634/542/black-business-camera-designer.jpg)] bg-no-repeat bg-center bg-cover relative">
        <Box className="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></Box>
        <Box className="bg-white p-10 max-w-[500px] w-full shadow-lg border-t-4 border-primary rounded-md z-10">
          <Box className="w-full flex flex-col items-center">
            {isLoading ? (
              <HourglassBottomIcon className="text-brand__font__size__xl text-primary mb-2" />
            ) : message === "Confirm Email" ? (
              <PendingIcon className="text-brand__font__size__xl text-primary mb-2" />
            ) : (
              <CheckCircleIcon className="text-brand__font__size__xl text-primary mb-2" />
            )}

            <Typography
              variant="caption"
              className="text-brand__font__size__lg text-primary font-brand__font__semibold"
            >
              {message}
            </Typography>
          </Box>
          <Box>
            <Box>
              <Box className="flex items-center justify-between mt-4">
                <Box className="w-full"></Box>
              </Box>
            </Box>

            <Button
              type="button"
              onClick={handleConfirmEmailVerification}
              className="bg-primary hover:bg-brand__black__color w-full cursor-pointer mt-3 text-white duration-300 font-brand__font__600"
            >
              {isLoading ? "Loading..." : "Confirm"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
