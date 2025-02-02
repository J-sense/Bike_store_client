import { Button } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
// import login from "../../assets/images/login.jpg";
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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      //   const toastId = toast.loading("Loading..");
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      if (res.error) {
        // toast(error.message);
        console.log(error);
      } else {
        const user = varify(res.token) as TUSer;
        dispatch(setUser({ user: user, token: res.token }));
        toast("Loggged in succssfully");
        setError("");
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.data.message);
      toast(error.data.message);
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#E0FFE7] via-[#CCFFF5] to-[#F0FFF4] min-h-screen flex justify-center items-center">
      <div className="flex flex-wrap items-center justify-center max-w-4xl rounded-4xl p-4">
        {/* Form Section */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center h-[500px] sm:p-12 md:rounded-4xl space-y-6 shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium text-black">
              Welcome back
            </h1>
            <p className="text-black text-sm sm:text-base font-medium">
              Please enter your details
            </p>
          </div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-10 md:p-0"
          >
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="bg-white bg-opacity-70 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="bg-white bg-opacity-70 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
              />
            </div>
            <Button
              htmlType="submit"
              className="w-full py-2 bg-green-400 text-white rounded-md hover:bg-green-500 shadow-md"
            >
              Submit
            </Button>
            <p className="text-sm font-mono">
              Don’t have an account?{" "}
              <Link to="/register" className="text-green-500 hover:underline">
                Sign up
              </Link>
            </p>
            <p color="danger">{error}</p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
