"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@src/components/ui/input";
import revalidateT from "@src/action/revalidate";
import toast, { Toaster } from "react-hot-toast";
import weight from "@public/userParams/weight.jpeg";
import waist from "@public/userParams/waist.jpeg";
import chest from "@public/userParams/chest.jpeg";
import biceps from "@public/userParams/biceps.jpeg";

const formSchema = z.object({
  weight: z
    .number({ message: "You should set some value" })
    .min(30, { message: "Are you certain that your weight is below 30 kg?" })
    .max(200, { message: "Are you certain that your weight is above 200 kg?" })
    .nonnegative({ message: "You can not set negative values." })
    .optional()
    .or(z.literal("")),
  waist: z
    .number({ message: "You should set some value" })
    .nonnegative({ message: "You can not set negative values." })
    .optional()
    .or(z.literal("")),
  chest: z
    .number({ message: "You should set some value" })
    .nonnegative({ message: "You can not set negative values." })
    .optional()
    .or(z.literal("")),
  biceps: z
    .number({ message: "You should set some value" })
    .nonnegative({ message: "You can not set negative values." })
    .optional()
    .or(z.literal("")),
});

type hookFormSchema = z.infer<typeof formSchema>;

const UserMeasurementsForm = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<hookFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const submitForm: SubmitHandler<hookFormSchema> = async (formData) => {
    Object.keys(formData).forEach((key) => {
      const typedKey = key as keyof typeof formData;
      if (formData[typedKey] === "") {
        delete formData[typedKey];
      }
    });

    const res = await fetch("https://fitp-be.vercel.app/updateStats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, id }),
    });
    if (res.ok && res.status === 200) {
      toast.success("User measurements updated successfully");
      reset();
      revalidateT('userParams')
    } else {
      toast.error("User measurements updated failed!");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2 md:p-2 lg:p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Update Your Measurements!
      </h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white"
      >
        <div className="flex flex-row-reverse items-center gap-4">
          <div className="flex-1 self-start">
            <label htmlFor="weight">Weight in kilograms</label>
            <Input
              id="weight"
              placeholder="Enter your weight"
              type="number"
              className="text-black"
              {...register("weight", {
                setValueAs: (value) => (value !== "" ? Number(value) : ""),
              })}
            />
            {errors.weight && (
              <p className="text-red-500 font-bold text-justify">
                {errors.weight.message}
              </p>
            )}
          </div>
          <Image
            alt="Weight"
            className="rounded-lg"
            height="100"
            src={weight}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div className="flex flex-row-reverse items-center gap-4">
          <div className="flex-1 self-start">
            <label htmlFor="waist">Waist in centimeters</label>
            <Input
              id="waist"
              placeholder="Enter your waist size"
              type="number"
              className="text-black"
              {...register("waist", {
                setValueAs: (value) => (value !== "" ? Number(value) : ""),
              })}
            />
            {errors.waist && (
              <p className="text-red-500 font-bold text-justify">
                {errors.waist.message}
              </p>
            )}
          </div>
          <Image
            alt="Waist"
            className="rounded-lg"
            height="100"
            src={waist}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div className="flex flex-row-reverse items-center gap-4">
          <div className="flex-1 self-start">
            <label htmlFor="chest">Chest in centimeters</label>
            <Input
              id="chest"
              placeholder="Enter your chest size"
              type="number"
              className="text-black"
              {...register("chest", {
                setValueAs: (value) => (value !== "" ? Number(value) : ""),
              })}
            />
            {errors.chest && (
              <p className="text-red-500 font-bold text-justify">
                {errors.chest.message}
              </p>
            )}
          </div>
          <Image
            alt="Chest"
            className="rounded-lg"
            height="100"
            src={chest}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div className="flex flex-row-reverse items-center gap-4">
          <div className="flex-1 self-start">
            <label htmlFor="biceps">Biceps in centimeters</label>
            <Input
              id="biceps"
              placeholder="Enter your hip size"
              type="number"
              className="text-black"
              {...register("biceps", {
                setValueAs: (value) => (value !== "" ? Number(value) : ""),
              })}
            />
            {errors.biceps && (
              <p className="text-red-500 font-bold text-justify">
                {errors.biceps.message}
              </p>
            )}
          </div>
          <Image
            alt="biceps"
            className="rounded-lg"
            height="100"
            src={biceps}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <button
          className="p-2 bg-green text-white text-center font-bold rounded-lg"
          type="submit"
        >
          Save Changes
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UserMeasurementsForm;
