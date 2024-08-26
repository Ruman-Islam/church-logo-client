import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { countries } from "../../../constants/countries";

export default function ProfileInfo({ user }) {
  const country = countries.find(
    (c) => c?.country.toLowerCase() === user?.country.toLowerCase()
  );

  return (
    <Box className="w-full p-6">
      <Box>
        <Box className="mb-5">
          <Typography className="font-brand__font__600">My profile</Typography>
        </Box>

        <Box className="flex flex-col lg:flex-row justify-between">
          <Box className="flex flex-col md:flex-row gap-4">
            <Box className="flex justify-between items-center w-[120px] h-[120px] flex-col border-2 rounded-full p-1">
              {!user?.verified ? (
                <Avatar
                  alt={user?.firstName}
                  src={user?.photo?.url || "/static/images/avatar/1.jpg"}
                  sx={{ backgroundColor: "#FF5722" }}
                  className="w-full h-full text-brand__font__size__lg2"
                />
              ) : (
                <Badge
                  className="w-full h-full text-brand__font__size__lg2"
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeContent={
                    <Box className="bg-white rounded-full text-primary text-brand__font__size__sm">
                      <CheckCircleIcon className="text-[20px]" />
                    </Box>
                  }
                >
                  <Avatar
                    alt={user?.firstName}
                    src={user?.photo?.url || "/static/images/avatar/1.jpg"}
                    sx={{ backgroundColor: "#FF5722" }}
                    className="w-full h-full text-brand__font__size__lg2"
                  />
                </Badge>
              )}
            </Box>
            <Box>
              <Typography className="font-brand__font__600 mb-1">
                {user?.firstName + " " + user?.lastName}
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

          {!user?.verified && (
            <MenuItem className="flex lg:items-start h-fit mt-2 lg:mt-0 w-fit">
              <WarningIcon className="text-error" />
              <span className="text-brand__font__size__sm">
                Verify your account by email
              </span>
            </MenuItem>
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
              {country?.dialCode + " " + user?.phone || "N/A"}
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
