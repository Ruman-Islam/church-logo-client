import Layout from "../../components/common/Layout";
import { useAppSelector } from "../../services/hook";

export default function ProfileScreen() {
    const {
    auth: { user },
  } = useAppSelector((state) => state);

console.log(user)

  return (
    <Layout title="Profile">
      <section id="profile">
        <div className="container px-2">This is profile {user.email}</div>
      </section>
    </Layout>
  );
}
