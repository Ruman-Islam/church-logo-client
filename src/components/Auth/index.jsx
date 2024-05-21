import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import churchLogo from "../../assets/logo/churchlogo.png";
import CustomButton from "../UI/CustomButton";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [onShow, setOnShow] = useState(true);
  const [loginData, setLoginData] = useState({
    showPassword: false,
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });
  const [registerData, setRegisterData] = useState({
    showPassword: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleLoginInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const handleRegisterInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setRegisterData({
      ...registerData,
      error: {
        [key]: "",
      },
      [key]: value,
    });
  };

  const handleClickShowLoginPassword = () =>
    setLoginData({
      ...loginData,
      showPassword: !loginData.showPassword,
    });

  const handleClickShowRegisterPassword = () =>
    setRegisterData({
      ...registerData,
      showPassword: !registerData.showPassword,
    });

  const handleMouseDownPassword = (e) => e.preventDefault();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // if (!registerData.firstName) {
    //   setRegisterData((prev) => ({
    //     ...prev,
    //     error: {
    //       ...prev.error,
    //       firstName: "First name is required!",
    //     },
    //   }));
    // }
    // if (!registerData.lastName) {
    //   setRegisterData((prev) => ({
    //     ...prev,
    //     error: {
    //       ...prev.error,
    //       lastName: "Last name is required!",
    //     },
    //   }));
    // }
    // if (!registerData.email) {
    //   setRegisterData((prev) => ({
    //     ...prev,
    //     error: {
    //       ...prev.error,
    //       email: "Email is required!",
    //     },
    //   }));
    // }
    // if (!registerData.password) {
    //   setRegisterData((prev) => ({
    //     ...prev,
    //     error: {
    //       ...prev.error,
    //       password: "Password is required!",
    //     },
    //   }));
    // }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-full max-h-[600px] h-full mx-auto rounded-xl p-2">
      <div className="h-full flex flex-row-reverse justify-between bg-white rounded-xl">
        <div className="basis-[50%] w-full h-full hidden sm:flex flex-col justify-end bg-login__background bg-no-repeat bg-center bg-cover rounded-tr-xl rounded-br-xl">
          <p className="text-brand__font__size__xs text-center text-white p-5">
            By proceeding, you agree to our{" "}
            <HashLink to="/terms-conditions#terms" className="underline">
              Terms & Conditions
            </HashLink>{" "}
            and confirm you have read our{" "}
            <HashLink to="/privacy-policy#privacy" className="underline">
              Privacy Policy
            </HashLink>
            .
          </p>
        </div>

        <div className="basis-[100%] sm:basis-[50%] w-full h-full flex flex-col items-center justify-center gap-y-5">
          <div>
            <div className="text-center w-fit mx-auto pt-10 pb-6">
              <HashLink to="/#">
                <img
                  className="max-w-[200px] w-full"
                  src={churchLogo}
                  alt="church logo"
                />
              </HashLink>
            </div>

            <div className="w-full flex justify-center items-center gap-2 text-brand__font__size__sm font-brand__font__500 text-primary">
              <CustomButton
                onClick={() => setOnShow(true)}
                className={`border border-primary px-4 py-0.5 rounded-full duration-300 ${
                  onShow ? "bg-primary text-white" : "bg-transparent"
                }`}
              >
                Sign In
              </CustomButton>
              <CustomButton
                onClick={() => setOnShow(false)}
                className={`border border-primary px-4 py-0.5 rounded-full duration-300 ${
                  onShow ? "bg-transparent" : "bg-primary text-white"
                }`}
              >
                Sign Up
              </CustomButton>
            </div>
          </div>
          <div className="flex-1 relative w-full overflow-hidden">
            <SignIn
              onShow={onShow}
              loginData={loginData}
              onSubmit={handleLoginSubmit}
              onChangeInput={handleLoginInput}
              onClickShowPassword={handleClickShowLoginPassword}
              onMouseDownShowPassword={handleMouseDownPassword}
            />
            <SignUp
              onShow={onShow}
              registerData={registerData}
              onSubmit={handleRegisterSubmit}
              onChangeInput={handleRegisterInput}
              onClickShowPassword={handleClickShowRegisterPassword}
              onMouseDownShowPassword={handleMouseDownPassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
