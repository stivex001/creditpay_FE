import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import { Field } from "schema/dynamicSchema";
import useDynamicForm from "@/hooks/useDynamicForm";
import { AuthUser } from "@/api/hooks/types";
import { auth } from "@/api/auth";
import AuthLayout from "@/components/layouts/AuthLayout";
import ControlledInput from "@/components/controlled/ControlledInput";
import CustomButton from "@/components/controlled/CustomButton";
import signupImg from "@/assets/images/signupimg.svg";

const fields: Field[] = [
  {
    name: "firstName",
    type: "text",
    isRequired: true,
  },
   {
    name: "lastName",
    type: "text",
    isRequired: true,
  },

  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
    {
    name: "phoneNumber",
    type: "text",
    errorMessage: "Phone Number is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
  {
    name: "confirmPassword",
    type: "text",
    errorMessage: "Password must be the same as that of password",
  },
];

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, watch, setError, clearErrors } =
    useDynamicForm<AuthUser>(fields, {});

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");


  const { registerUser } = auth();

  const { isPending, mutateAsync } = registerUser;

  useEffect(() => {
    if (confirmPassword) {
      if (confirmPassword !== password) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
      } else {
        clearErrors("confirmPassword");
      }
    }
  }, [confirmPassword, password, setError, clearErrors]);

  const onSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        message: "Passwords do not match",
      });
      return;
    }

    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          toast.success(response?.message);
          navigate("/auth/login");
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
    <AuthLayout authImg={signupImg}>
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
            name="firstName"
            control={control}
            placeholder="Enter First name"
            type="text"
            label="First Name"
            variant="primary"
            rules={{ required: true }}
          />

          <ControlledInput
            name="lastName"
            control={control}
            placeholder="Enter Last name"
            type="text"
            label="Last Name"
            variant="primary"
            rules={{ required: true }}
          />
            <ControlledInput
            name="phoneNumber"
            control={control}
            placeholder=""
            type="text"
            label="Phone Number"
            variant="primary"
            rules={{ required: true }}
          />

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
          <ControlledInput
            name="confirmPassword"
            control={control}
            placeholder="Password"
            type="password"
            label="Confirm Password"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex justify-center">
            <CustomButton
              label="Create Account"
              variant="primary"
              className="w-full"
              size="lg"
              type="submit"
              // disabled={!isValid}
              isLoading={isPending}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
