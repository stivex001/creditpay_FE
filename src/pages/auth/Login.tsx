import { auth } from "@/api/auth";
import AuthLayout from "@/components/layouts/AuthLayout";

// import { useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../../../store/authStore";
import useDynamicForm from "@/hooks/useDynamicForm";
import ControlledInput from "@/components/controlled/ControlledInput";
import CustomButton from "@/components/controlled/CustomButton";
import { Field } from "schema/dynamicSchema";
import loginImg from "@/assets/images/login.svg";
import { useLayoutEffect } from "react";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAccessToken, setCurrentUser, accessToken } = useAuthStore();

  const { control, handleSubmit, formState } = useDynamicForm(fields, {});

  useLayoutEffect(() => {
    if (accessToken) {
      navigate("/", { replace: true });
    }
  }, [navigate, accessToken]);

  const { isValid } = formState;

  const { loginUser } = auth();

  const { isPending, mutateAsync } = loginUser;

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          if (response?.status === true) {
            const token = response?.data?.access_token;
            const user = response?.data?.user;
            if (token && user) {
              setAccessToken(token);
              setCurrentUser(user);
            }
            toast.success("Login successfully!");
            navigate(location.state?.from?.pathname || "/", {
              replace: true,
            });
          } else {
            toast.error(response?.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <AuthLayout authImg={loginImg}>
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-[#142B71] font-bold text-5xl leading-16 max-w-md">
            Welcome to Credit<span className="font-normal">Pay</span>
          </h1>
          <p className="text-[#142B71] font-semibold text-4xl leading-16 ">
            Enter your detail below
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Phone Number or Email"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder="Password"
            type="password"
            label="Password"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex items-center gap-5 justify-center">
            <Link to="/auth/forgot_password" className="text-base  text-black">
              Forgot Password?
            </Link>
            <Link
              to="/auth/register"
              className="text-base  text-black underline"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex justify-center">
            <CustomButton
              label="Sign In"
              variant="primary"
              className="w-full"
              size="lg"
              type="submit"
              disabled={!isValid}
              isLoading={isPending}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
