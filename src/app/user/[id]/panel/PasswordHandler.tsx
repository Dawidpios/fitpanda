"use client";

import { Label } from "@src/components/ui/label";
import { Input } from "@src/components/ui/input";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const formSchema = z
  .object({
    password: z.string().trim().min(8),
    newPassword: z.string().trim().min(8),
    confirmPassword: z.string().trim().min(8),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type schemaType = z.infer<typeof formSchema>;

const PasswordHandler = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
    reset,
  } = useForm<schemaType>({
    resolver: zodResolver(formSchema),
  });
  console.log(isLoading, isSubmitting)
  const submitHandler: SubmitHandler<schemaType> = async (formData) => {
    const { success, data } = formSchema.safeParse(formData);
    const { password } = formData;
    try {
      if (!success) throw new Error("Validation failed!");
      const checkPassword = await fetch(
        "https://fitp-be.vercel.app/checkPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, id }),
        }
      );

      if (checkPassword.status !== 200 && !checkPassword.ok) {
        const checkPasswordResponse = await checkPassword.json();
        throw new Error(checkPasswordResponse.message);
      }
  
      const changePasswordRequest = await fetch(
        "https://fitp-be.vercel.app/changePassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, id }),
        }
      );

      if (changePasswordRequest.status !== 200 && !changePasswordRequest.ok) {
        const changePasswordResponse = await changePasswordRequest.json();
        throw new Error(changePasswordResponse.message);
      }

      reset();
      toast.success("Password has been changed!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="mt-4 space-y-4 text-black">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <Label htmlFor="current-password">Current Password</Label>
          <Input
            id="current-password"
            placeholder="Enter your current password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 font-bold text-sm text-justify">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <Label className="text-black" htmlFor="new-password">
            New Password
          </Label>
          <Input
            id="new-password"
            placeholder="Enter your new password"
            type="password"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <p className="text-red-500 font-bold text-sm text-justify">
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <div>
          <Label className="text-black" htmlFor="confirm-password">
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            placeholder="Confirm your new password"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 font-bold text-sm text-justify">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`mt-2 p-2 w-50 rounded-xl text-white ${isSubmitting ? 'bg-gray' : 'bg-green'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating password' : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default PasswordHandler;
