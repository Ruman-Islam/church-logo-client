import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../UI/CustomButton";
import Input from "../UI/Input";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignUp(props) {
  const {
    onShow,
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
      <div className="text-center mb-2.5 text-brand__black__color font-brand__font__500 text-brand__font__size__lg">
        <h3>Create Account</h3>
      </div>

      <form>
        <div className="flex gap-2">
          <Input
            id="firstName"
            type="text"
            variant="outlined"
            inputValue={registerData?.firstName}
            name="firstName"
            label="First name"
            onChange={onChangeInput}
            formControlStyle={{ width: "100%" }}
            error={registerData?.error}
          />
          <Input
            id="lastName"
            type="text"
            variant="outlined"
            inputValue={registerData?.lastName}
            name="lastName"
            label="Last name"
            onChange={onChangeInput}
            formControlStyle={{ width: "100%" }}
            error={registerData?.error}
          />
        </div>

        <Input
          id="email"
          type="text"
          variant="outlined"
          inputValue={registerData?.email}
          name="email"
          label="Email Address"
          onChange={onChangeInput}
          formControlStyle={{ width: "100%", marginTop: "10px" }}
          error={registerData?.error}
        />

        <Input
          id="password"
          label="Password"
          variant="outlined"
          inputValue={registerData?.password}
          name="password"
          onChange={onChangeInput}
          inputAdornmentPosition="end"
          error={registerData?.error}
          type={registerData?.showPassword ? "text" : "password"}
          formControlStyle={{ width: "100%", marginTop: "10px" }}
          endAdornmentChildren={
            <IconButton
              onClick={onClickShowPassword}
              onMouseDown={onMouseDownShowPassword}
              edge="end"
            >
              {registerData?.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />

        <div className="mt-4">
          <CustomButton
            type="submit"
            className="border w-full rounded-full py-2.5 bg-primary hover:bg-brand__black__color text-white duration-300"
          >
            Register
          </CustomButton>
        </div>
      </form>

      <GoogleLoginButton />
    </div>
  );
}
