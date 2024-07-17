import Layout from "../../components/common/Layout";
import { useAppSelector } from "../../services/hook";
import AccountSidebar from "./components/AccountSidebar";

export default function ProfileScreen() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  return (
    <Layout title="Profile">
      <section id="profile">
        <div className="bg-page_bg h-[150px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-[30px]">Hello, {user.firstName}</h3>
        </div>
        <div className="container px-4 py-5 border border-red-500">
          <div className="flex gap-2">
            <AccountSidebar />
            <div className="border border-green-600 w-full flex items-center justify-center">
              Profile
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
