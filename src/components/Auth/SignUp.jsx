import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignUp(props) {
  const {
    onShow,
    onSubmit,
    registerData,
    onChangeInput,
    onClickShowPassword,
    onMouseDownShowPassword,
  } = props;

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

      <form onSubmit={onSubmit}>
        <div className="flex gap-2">
          <FormControl sx={{ width: "100%" }}>
            <TextField
              variant="outlined"
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              value={registerData?.firstName}
              onChange={onChangeInput}
              error={!!registerData?.error?.firstName}
              helperText={registerData?.error?.firstName}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              variant="outlined"
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              value={registerData?.lastName}
              onChange={onChangeInput}
              error={!!registerData?.error?.lastName}
              helperText={registerData?.error?.lastName}
            />
          </FormControl>
        </div>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="Email Address"
            value={registerData?.email}
            onChange={onChangeInput}
            error={!!registerData?.error?.email}
            helperText={registerData?.error?.email}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            name="password"
            label="Password"
            value={registerData?.password}
            onChange={onChangeInput}
            error={!!registerData?.error?.password}
            helperText={registerData?.error?.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={onClickShowPassword}
                    onMouseDown={onMouseDownShowPassword}
                    edge="end"
                  >
                    {registerData?.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <div className="mt-4">
          <CustomButton
            type="submit"
            className="border w-full rounded-full py-2.5 bg-primary hover:bg-brand__black__color text-white duration-300"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
