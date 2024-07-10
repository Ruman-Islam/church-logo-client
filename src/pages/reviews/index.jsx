import Layout from "../../components/common/Layout";

export default function ReviewsScreen() {
  return (
    <Layout title="Reviews">
      <section id="reviews">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-[37px]">Reviews</h3>
          <h4 className=" md:text-[20px] mt-1 max-w-[600px] w-full">
            Read all the real, honest reviews from thousands of professionals on
            our Facebook Page and Trustpilot.
          </h4>
        </div>

        <div className="container px-2 py-5 border border-blue-600">

        </div>
      </section>
    </Layout>
  );
}
