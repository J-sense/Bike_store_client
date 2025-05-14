/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Dropdown, MenuProps, Avatar, Badge } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const { Header } = Layout;

const DHeader = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const email = (user as { email?: string })?.email;

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-2">
          <Link to={`my-profile`}>
            <UserOutlined />
            <span>Profile</span>
          </Link>
        </div>
      ),
    },
    // {
    //   key: "2",
    //   label: (
    //     <div className="flex items-center gap-2">
    //       <SettingOutlined />
    //       <span>Settings</span>
    //     </div>
    //   ),
    // },
    {
      key: "3",
      label: (
        <div
          className="flex items-center gap-2 text-red-500"
          onClick={handleLogout}
        >
          <LogoutOutlined />
          <span>Logout</span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "12",
      label: (
        <div className="flex items-center gap-2">
          <span className="text-black font-medium">{email}</span>
        </div>
      ),
    },
  ];

  return (
    <Header className="bg-[#101B1F] shadow-md px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-white">Bike Shop Dashboard</h2>
      <div className="flex items-center gap-4">
        <Link to="/">
          <Home className="text-white mt-1" />
        </Link>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <div className="flex items-center gap-2 cursor-pointer">
            <Badge dot status="success">
              <Avatar
                size="default"
                icon={<UserOutlined />}
                className="bg-emerald-500 hover:bg-emerald-400 transition-colors"
              />
            </Badge>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default DHeader;
