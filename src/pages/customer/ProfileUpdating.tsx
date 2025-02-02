/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button } from "antd";
import { useUpdatePasswordMutation } from "../../redux/features/auth/auth.Api";
import { toast } from "sonner";

const ProfileUpdating: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [updatePassword] = useUpdatePasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfo = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };

      await updatePassword(userInfo).unwrap();
      toast.success("Password updated successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-[#E0FFE7] via-[#CCFFF5] to-[#F0FFF4] ">
      <div className="bg-white bg-opacity-40  backdrop-blur-lg shadow-lg rounded-xl p-6 sm:p-10 w-full max-w-md">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Update Password
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your old and new password
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              {...register("oldPassword")}
              className="w-full p-3 rounded-md bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter old password"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              {...register("newPassword")}
              className="w-full p-3 rounded-md bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdating;
