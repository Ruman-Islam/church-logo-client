import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import data from "../../data/categories.json";

export default function CategoriesScreen() {
  const { section } = useParams();

  return (
    <Layout title="Categories">
      <section className="bg-white">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">The Signature Collection</h3>
          <h4 className="text-[20px]">
            A handcrafted, uniquely tailored signature logo to suit your unique
            personality.
          </h4>
        </div>
        <div className="container px-2 py-5">
          <div className="flex justify-center items-center gap-5 mb-5">
            {data.map((d) => (
              <HashLink key={d.id} to={d.route}>
                <div
                  className={`border hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full px-4 py-1.5 text-brand__font__size__sm ${
                    d.route.includes(section) && "bg-primary text-white"
                  }`}
                >
                  {d.title}
                </div>
              </HashLink>
            ))}
          </div>
          <div className="border border-red-500 py-2">Content: {section}</div>
        </div>
      </section>
    </Layout>
  );
}
