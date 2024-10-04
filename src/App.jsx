import AOS from "aos";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import JumpToTopBtn from "./components/common/JumpToTopBtn";
import Routers from "./components/Routers";

AOS.init({
  once: true,
});

function App() {
  return (
    <Fragment>
      <Routers />
      <JumpToTopBtn />
      <Toaster position="bottom-center" />
    </Fragment>
  );
}

export default App;
