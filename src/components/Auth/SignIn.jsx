import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { HashLink } from "react-router-hash-link";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignIn(props) {
  const {
    onShow,
    onSubmit,
    loginData,
    onChangeInput,
    onClickShowPassword,
    onMouseDownShowPassword,
  } = props;

  return (
    <div
      className={`w-full h-full px-4 absolute top-0 duration-500 ${
        onShow ? "translate-x-0 opacity-1" : "-translate-x-[100%] opacity-0"
      }`}
    >
      <GoogleLoginButton />

      <div className="text-center mb-2.5 text-brand__black__color font-brand__font__500 text-brand__font__size__lg">
        <h3>Sign In</h3>
      </div>

      <form onSubmit={onSubmit}>
        <FormControl sx={{ width: "100%" }}>
          <TextField
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="Email Address"
            value={loginData?.email}
            onChange={onChangeInput}
            error={!!loginData?.error?.email}
            helperText={!!loginData?.error?.email}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            name="password"
            label="Password"
            value={loginData?.password}
            onChange={onChangeInput}
            error={!!loginData?.error?.password}
            helperText={loginData?.error?.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={onClickShowPassword}
                    onMouseDown={onMouseDownShowPassword}
                    edge="end"
                  >
                    {loginData?.showPassword ? (
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
