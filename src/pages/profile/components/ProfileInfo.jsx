import VerifiedIcon from "@mui/icons-material/Verified";
import WarningIcon from "@mui/icons-material/Warning";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { countries } from "../../../constants/countries";
import useToast from "../../../hooks/useToast";
import { useVerifyEmailMutation } from "../../../services/features/auth/authApi";

export default function ProfileInfo({ user }) {
  const country = countries.find(
    (c) => c?.country?.toLowerCase() === user?.country?.toLowerCase()
  );

  const { handleSuccess, handleError } = useToast();

  const [verifyEmail, { data, isLoading, error }] = useVerifyEmailMutation();

  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
    }
    if (error?.status) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleSendEmailVerification = async () => {
    const data = {
      email: user?.email,
    };

    await verifyEmail({ data });
  };

  return (
    <Box className="w-full p-6">
      <Box>
        <Box className="mb-5">
          <Typography className="font-brand__font__600">My profile</Typography>
        </Box>

        <Box className="flex flex-col md:flex-row justify-between">
          <Box className="flex items-center gap-4">
            <Box className="flex justify-between items-center w-[120px] h-[120px] flex-col border-2 rounded-full p-1">
              <Avatar
                alt={user?.firstName}
                src={user?.photo?.url || "/static/images/avatar/1.jpg"}
                sx={{ backgroundColor: "#FF5722" }}
                className="w-full h-full text-brand__font__size__lg2"
              />
            </Box>
            <Box>
              <Typography className="font-brand__font__600 flex items-center gap-x-1 mb-0.5">
                <span>{user?.firstName + " " + user?.lastName}</span>
                {user?.verified && (
                  <VerifiedIcon className="text-[18px] text-primary" />
                )}
              </Typography>

              <Typography
                className="text-text__gray font-brand__font__600"
                variant="caption"
                display="block"
              >
                ID: {user?.userId}
              </Typography>
              {user?.designation && (
                <Typography
                  className="text-text__gray"
                  variant="caption"
                  display="block"
                >
                  {user?.designation}
                </Typography>
              )}
              {user?.address && (
                <Typography
                  className="text-text__gray"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {user?.address}
                </Typography>
              )}
            </Box>
          </Box>

          {!user?.verified ? (
            isLoading ? (
              "Email sending..."
            ) : (
              <MenuItem
                onClick={handleSendEmailVerification}
                className="flex lg:items-start h-fit mt-2 md:mt-0 lg:mt-0 w-fit"
              >
                <WarningIcon className="text-error" />
                <span className="text-brand__font__size__sm">
                  Verify your account by email
                </span>
              </MenuItem>
            )
          ) : (
            <Box className="text-brand__font__size__sm text-text__gray mt-2 md:mt-0">
              <Typography variant="overline">
                <span>Member since:</span>
              </Typography>{" "}
              <Typography variant="overline">
                <span>{new Date(user?.createdAt).toDateString()}</span>
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Box className="mb-5">
          <Typography className="font-brand__font__600">
            Personal Information
          </Typography>
        </Box>
        <Box className="flex flex-col md:flex-row mb-5">
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              First Name
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.firstName || "N/A"}
            </Typography>
          </Box>
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Last Name
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.lastName || "N/A"}
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col md:flex-row mb-5">
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Email Address
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600 lowercase"
            >
              {user?.email || "N/A"}
            </Typography>
          </Box>
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Phone
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {country?.dialCode && user?.phone
                ? country?.dialCode + " " + user?.phone
                : "N/A"}
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col md:flex-row mb-5">
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Gender
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.gender || "N/A"}
            </Typography>
          </Box>
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Designation
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.designation || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Box>
          <Typography className="font-brand__font__600 mb-5">
            Address
          </Typography>
        </Box>
        <Box className="flex flex-col md:flex-row mb-5">
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Location
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.address || "N/A"}
            </Typography>
          </Box>
          <Box className="basis-[50%]">
            <Typography
              variant="caption"
              display="block"
              className="text-text__gray text-[14px]"
            >
              Country
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="text-[14px] font-brand__font__600"
            >
              {user?.country || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
