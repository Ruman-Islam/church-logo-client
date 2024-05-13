import { Link } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <section className="w-full min-h-screen bg-not__found bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <div className="max-w-screen-xl m-auto w-full min-h-screen flex flex-col justify-center px-2 text-brand__black__color">
        <div>
          <h2 className="text-8xl font-extrabold">OOPS!</h2>
          <p className="font-bold">Page not found</p>
          <p className="text-sm max-w-[350px] w-full">
            Sorry, the content that you are looking for doesn&rsquo;t exist.
          </p>
          <Link
            className="block bg-primary hover:bg-brand__black__color duration-300 w-fit py-1 px-4 rounded mt-2 text-white"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
