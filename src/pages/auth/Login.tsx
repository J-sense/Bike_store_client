/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useLoginMutation } from "../../redux/features/auth/auth.Api";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { varify } from "../../utils/VarifyToken";
import { TUSer } from "../../type/types";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleAdmin = async () => {
    try {
      const userInfo = {
        email: "admin@gmail.com",
        password: "admin123",
      };
      const res = await login(userInfo).unwrap();
      if (res.error) {
        console.log(error);
      } else {
        const user = varify(res.token) as TUSer;
        dispatch(setUser({ user: user, token: res.token }));
        toast.success("Logged in successfully");
        setError("");
        navigate("/");
      }
    } catch (error: any) {
      setError(error.data.message);
      toast.error(error.data.message);
    }
  };
  const handleCustomer = async () => {
    try {
      const userInfo = {
        email: "test@gmail.com",
        password: "jishan",
      };
      const res = await login(userInfo).unwrap();
      if (res.error) {
        console.log(error);
      } else {
        const user = varify(res.token) as TUSer;
        dispatch(setUser({ user: user, token: res.token }));
        toast.success("Logged in successfully");
        setError("");
        navigate("/");
      }
    } catch (error: any) {
      setError(error.data.message);
      toast.error(error.data.message);
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      if (res.error) {
        console.log(error);
      } else {
        const user = varify(res.token) as TUSer;
        dispatch(setUser({ user: user, token: res.token }));
        toast.success("Logged in successfully");
        setError("");
        navigate("/");
      }
    } catch (error: any) {
      setError(error.data.message);
      toast.error(error.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 h-2"></div>

          {/* Content */}
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to access your account</p>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  htmlType="submit"
                  className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
                >
                  Sign in <FiArrowRight className="ml-2" />
                </Button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm text-center py-2 px-3 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}
            </Form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-emerald-600 hover:text-emerald-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button onClick={handleAdmin}>Login as a admin</Button>
            <Button onClick={handleCustomer}>Login as a customer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
