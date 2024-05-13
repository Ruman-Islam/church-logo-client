// import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/logo/churchlogo_favicon.png";
// import Button from "../../components/UI/Button";
import { Button } from "@material-tailwind/react";

export default function SignInScreen() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ChurchLogo - Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-[570px] w-full h-full p-5 border shadow-sm rounded-xl">
          <div>
            <div className="mb-3">
              <img src={Logo} alt="Church Logo" />
            </div>
            <h2 className="text-brand__font__size__lg font-brand__font__semibold">
              Step into the Sanctuary of Design Excellence!
            </h2>
            <p className="mt-2.5">
              Welcome to <em>Church Logo</em>, where creativity meets faith to
              craft stunning identities. Embrace the divine journey by logging
              in to unlock a world of inspirational designs and heavenly
              customization options.
            </p>
          </div>
          <div className="mt-5 md:mt-10 flex flex-col gap-3">
          <Button>Button</Button>
            {/* <Button className="flex items-center justify-center gap-10 w-full border hover:border-black duration-300 py-3 rounded-full">
              <FcGoogle size={25} />
              <span>Continue with Google</span>
            </Button> */}
            {/* <Button className="flex items-center justify-center gap-10 w-full border hover:border-black duration-300 py-3 rounded-full">
            <FaFacebook size={25} className="text-[#3578EA]" />
            <span>Continue with Facebook</span>
          </Button> */}
          </div>
          <div className="mt-5 md:mt-10">
            <span>Or, sign in with email.</span>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
