import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useAppSelector } from "../../services/hook";
import AccountSettingEdit from "./components/AccountSettingEdit";

export default function DashboardScreen() {
  const scrollWithOffset = useScrollWithOffset();

  const { auth } = useAppSelector((state) => state);

  return (
    <Layout title="Dashboard">
      <section id="dashboard">
        <SectionBanner heading={`Hello, ${auth?.user.firstName}`} desc="" />
        <div className="max-w-[1024px] w-full mx-auto px-4 py-5 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:max-w-[230px] w-full overflow-x-auto">
              <Paper className="shadow-none h-full">
                <MenuList className="flex flex-row lg:flex-col items-center lg:items-start lg:justify-center">
                  <MenuItem className="lg:w-full">
                    <HashLink
                      to="/dashboard#dashboard"
                      scroll={(el) => scrollWithOffset(el, 135)}
                      className="inline-block w-full"
                    >
                      <ListItemText>
                        <span className="text-brand__font__size__md font-brand__font__semibold duration-300">
                          Dashboard
                        </span>
                      </ListItemText>
                    </HashLink>
                  </MenuItem>
                  <MenuItem className="lg:w-full">
                    <HashLink
                      to="/profile#profile"
                      scroll={(el) => scrollWithOffset(el, 135)}
                      className="inline-block w-full"
                    >
                      <ListItemText>
                        <span>Profile</span>
                      </ListItemText>
                    </HashLink>
                  </MenuItem>
                  <MenuItem className="lg:w-full">
                    <HashLink
                      to="/account-settings#account-settings"
                      scroll={(el) => scrollWithOffset(el, 135)}
                      className="inline-block w-full"
                    >
                      <ListItemText>
                        <span>Account Settings</span>
                      </ListItemText>
                    </HashLink>
                  </MenuItem>
                </MenuList>
              </Paper>
            </div>
            <div className="w-full flex items-center justify-center border-l">
              <AccountSettingEdit auth={auth} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
