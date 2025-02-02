import { Button } from "antd";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterUserMutation } from "../../redux/features/auth/auth.Api";
// import { useLoginMutation } from "../../redux/features/auth/auth.Api";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const navigaten = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfor = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await registerUser(userInfor);
      navigaten("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast(error.data.message);
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#8fa093] via-[#667c77] to-[#F0FFF4] min-h-screen flex justify-center items-center">
      <div className="flex flex-wrap items-center justify-center max-w-4xl rounded-4xl p-4">
        {/* Form Section */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center h-[600px] sm:p-12 md:rounded-4xl space-y-6 shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium text-black">
              Create an Account
            </h1>
            <p className="text-black text-sm sm:text-base ">
              Please fill in the details to register
            </p>
          </div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-10 md:p-0"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="bg-white bg-opacity-70 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>
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
              Register
            </Button>
            <p className="text-sm font-mono">
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 hover:underline">
                Login
              </Link>
            </p>
            {/* <p color="danger">{error}</p> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
