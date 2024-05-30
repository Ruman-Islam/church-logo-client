import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import CustomButton from "../UI/CustomButton";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignUp(props) {
  const {
    onShow,
    // onSubmit,
    registerData,
    onChangeInput,
    onClickShowPassword,
    onMouseDownShowPassword,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const firstNameError =
    errors?.firstName && errors?.firstName?.type.includes("required")
      ? "This field is required"
      : errors?.firstName?.type.includes("maxLength")
      ? "Maximum 15 characters"
      : errors?.firstName?.type.includes("minLength")
      ? "Minimum 3 characters"
      : "";
  const lastNameError =
    errors?.lastName && errors?.lastName?.type.includes("required")
      ? "This field is required"
      : errors?.lastName?.type.includes("maxLength")
      ? "Maximum 15 characters"
      : errors?.lastName?.type.includes("minLength")
      ? "Minimum 3 characters"
      : "";
  const emailError =
    errors?.email && errors?.email?.type.includes("required")
      ? "This field is required"
      : errors?.email?.type.includes("pattern")
      ? "Invalid email"
      : "";
  const passwordError =
    errors?.password && errors?.password?.type.includes("required")
      ? "This field is required"
      : errors?.password?.type.includes("pattern")
      ? "Maximum 15 characters"
      : "";

  const onSubmit = async (data) => {};
  console.log(errors);
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <FormControl sx={{ width: "100%" }}>
            <TextField
              {...register("firstName", {
                required: "This field is required",
                maxLength: 15,
                minLength: 3,
              })}
              variant="outlined"
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              value={registerData?.firstName}
              onChange={onChangeInput}
              error={!!firstNameError}
              helperText={firstNameError}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              {...register("lastName", {
                required: true,
                maxLength: 15,
                minLength: 3,
              })}
              variant="outlined"
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              value={registerData?.lastName}
              onChange={onChangeInput}
              error={!!lastNameError}
              helperText={lastNameError}
            />
          </FormControl>
        </div>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="Email Address"
            value={registerData?.email}
            onChange={onChangeInput}
            error={!!emailError}
            helperText={emailError}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", marginTop: "10px" }}>
          <TextField
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
            })}
            variant="outlined"
            id="password"
            type="password"
            name="password"
            label="Password"
            value={registerData?.password}
            onChange={onChangeInput}
            error={!!passwordError}
            helperText={passwordError}
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
