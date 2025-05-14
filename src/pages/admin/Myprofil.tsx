/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllUserQuery } from "../../redux/features/auth/auth.Api";
import { useAppSelector } from "../../redux/hooks";
import cover from "../../assets/images/cover.jpg";
import fb from "../../assets/images/fb.jpg";
import { Camera, User, Mail, Shield, CalendarDays } from "lucide-react";

const Myprofil = () => {
  const { data } = useAllUserQuery(undefined);
  const us = useAppSelector((state) => state.auth.user);
  const email = (us as { email?: string })?.email;
  const user = data?.data?.find((u: { email: any }) => u.email === email);

  // Format the createdAt date
  const joinDate = new Date(user?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full bg-gray-100 min-h-screen pb-10">
      {/* Cover Photo Section */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Profile Picture */}
        <div className="absolute left-8 bottom-[-60px] rounded-full border-4 border-white shadow-lg z-50">
          <img
            src={fb}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
          <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md">
            <Camera className="text-white w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="mt-20 px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold">{user?.name}</h1>
          <p className="text-gray-500 mt-1">Admin Profile</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">
                Personal Information
              </h2>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <User className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">
                Account Information
              </h2>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Shield className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium capitalize">{user?.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <CalendarDays className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">{joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofil;
