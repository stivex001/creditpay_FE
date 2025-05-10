
import { auth } from "@/api/auth";
import AuthLayout from "@/components/layouts/AuthLayout";

import { useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../../../store/authStore";
import useDynamicForm from "@/hooks/useDynamicForm";
import ControlledInput from "@/components/controlled/ControlledInput";
import CustomButton from "@/components/controlled/CustomButton";
import { Field } from "schema/dynamicSchema";

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
  const { setAccessToken, accessToken, setCurrentUser } = useAuthStore();

  const { control, handleSubmit, formState } = useDynamicForm(fields, {});

  useLayoutEffect(() => {
    if (accessToken) {
      navigate("/dashboard", { replace: true });
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
            navigate(location.state?.from?.pathname || "/dashboard", {
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
    <AuthLayout>
      <div className="flex flex-col gap-10">
        {/* <AuthTitle
          title="Sign in"
          question="Don’t have an account?"
          link="Create now"
          url="/auth/register"
        /> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-7"
        >
          <ControlledInput
            name="email"
            control={control}
            placeholder="Enter Email"
            type="email"
            label="email"
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

          <div className="flex items-center justify-between">
            
            <Link
              to="/auth/forgot_password"
              className="text-base font-medium underline text-primary"
            >
              Forgot Password?
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
