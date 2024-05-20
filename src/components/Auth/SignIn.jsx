import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { HashLink } from "react-router-hash-link";
import CustomButton from "../UI/CustomButton";
import Input from "../UI/Input";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignIn(props) {
  const {
    onShow,
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
      <div className="text-center mb-2.5 text-brand__black__color font-brand__font__500 text-brand__font__size__lg">
        <h3>Sign In</h3>
      </div>

      <form>
        <Input
          id="email"
          type="text"
          variant="outlined"
          inputValue={loginData?.email}
          label="Email Address"
          name="email"
          onChange={onChangeInput}
          formControlStyle={{ width: "100%" }}
          error={loginData?.error}
        />

        <Input
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          inputValue={loginData?.password}
          onChange={onChangeInput}
          inputAdornmentPosition="end"
          error={loginData?.error}
          type={loginData?.showPassword ? "text" : "password"}
          formControlStyle={{
            width: "100%",
            marginTop: "10px",
          }}
          endAdornmentChildren={
            <IconButton
              onClick={onClickShowPassword}
              onMouseDown={onMouseDownShowPassword}
              edge="end"
            >
              {loginData?.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />

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

      <GoogleLoginButton />
    </div>
  );
}
