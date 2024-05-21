import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import churchLogo from "../../assets/logo/churchlogo.png";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import CustomButton from "../../components/UI/CustomButton";
import Layout from "../../components/common/Layout";

const initialLoginData = {
  showPassword: false,
  email: "",
  password: "",
  error: {
    email: "",
    password: "",
  },
};

const initialRegisterData = {
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
};

export default function SignInScreen() {
  const [onShow, setOnShow] = useState(true);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [registerData, setRegisterData] = useState(initialRegisterData);

  useEffect(() => {
    if (onShow) {
      setRegisterData(initialRegisterData);
    } else if (!onShow) {
      setLoginData(initialLoginData);
    }
  }, [onShow]);

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

  return (
    <Layout title="Log In" showHeader={false} showFooter={false}>
      <section className="h-screen text-brand__black__color">
        <div className="container h-full flex flex-col justify-center items-center p-4 md:p-8">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-full max-h-[600px] h-full mx-auto rounded-xl p-2">
            <div className="h-full flex flex-row-reverse justify-between bg-white rounded-xl shadow-md">
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

              <div className="basis-[100%] sm:basis-[50%] w-full h-full flex flex-col items-center justify-center gap-y-5 border rounded-tl-lg rounded-bl-lg">
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
                    onChangeInput={handleLoginInput}
                    onClickShowPassword={handleClickShowLoginPassword}
                    onMouseDownShowPassword={handleMouseDownPassword}
                  />
                  <SignUp
                    onShow={onShow}
                    registerData={registerData}
                    onChangeInput={handleRegisterInput}
                    onClickShowPassword={handleClickShowRegisterPassword}
                    onMouseDownShowPassword={handleMouseDownPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
