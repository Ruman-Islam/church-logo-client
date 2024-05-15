import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import churchLogo from "../../assets/logo/churchlogo.png";
import CustomButton from "../../components/UI/CustomButton";
import CustomLink from "../../components/UI/CustomLink";
import Input from "../../components/UI/Input";
import Layout from "../../components/common/Layout";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => e.preventDefault();
  return (
    <Layout title="Log In" showHeader={false} showFooter={false}>
      <section className="h-screen text-brand__black__color">
        <div className="container h-full flex flex-col justify-center items-center p-4 md:p-8">
          <div className="max-w-[500px] w-full border shadow-sm rounded-md p-4 md:p-8">
            <div className="text-center mb-10">
              <img
                className="mx-auto max-w-[300px]"
                src={churchLogo}
                alt="church logo"
              />
            </div>

            <div>
              <CustomButton
                type="submit"
                className="flex items-center justify-center gap-2 border w-full py-2.5 duration-300 rounded-full hover:border-brand__black__color"
              >
                <FcGoogle size={25} />
                <span>Sign in with Google</span>
              </CustomButton>
              <div className="text-center my-2 flex items-center gap-x-2">
                <div className="w-full border-t"></div>
                <div>Or</div>
                <div className="w-full border-t"></div>
              </div>
            </div>

            <form>
              <div className="flex gap-2">
                <Input
                  id="firstName"
                  type="text"
                  variant="outlined"
                  inputValue={email}
                  label="First name"
                  onChange={handleEmail}
                  formControlStyle={{ width: "100%" }}
                />
                <Input
                  id="lastName"
                  type="text"
                  variant="outlined"
                  inputValue={email}
                  label="Last name"
                  onChange={handleEmail}
                  formControlStyle={{ width: "100%" }}
                />
              </div>

              <Input
                id="email"
                type="text"
                variant="outlined"
                inputValue={email}
                label="Email Address"
                onChange={handleEmail}
                formControlStyle={{ width: "100%", marginTop: "10px" }}
              />

              <Input
                id="password"
                label="Password"
                variant="outlined"
                inputValue={password}
                onChange={handlePassword}
                inputAdornmentPosition="end"
                type={showPassword ? "text" : "password"}
                formControlStyle={{ width: "100%", marginTop: "10px" }}
                endAdornmentChildren={
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />

              <div className="mt-4">
                <CustomButton
                  type="submit"
                  className="border w-full rounded-md py-1 bg-primary hover:bg-brand__black__color text-white duration-300"
                >
                  Register
                </CustomButton>

                <div className="py-6 flex items-center justify-between">
                  <p>Already have an account?</p>
                  <CustomLink
                    route="/login"
                    classNames="border border-primary text-primary w-fit rounded-md px-5 py-1 hover:bg-primary hover:text-white duration-300 inline-block"
                  >
                    Login
                  </CustomLink>
                </div>

                <div className="border-t pt-2">
                  <p className="text-xs text-center">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
