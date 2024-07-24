"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSwiper } from "swiper/react";
import setData from './setData'

const introductionSchema = z.object({
  gender: z.enum(["Male", "Female"], {message: "You should pick gender to complete form."}),
  age: z
    .number()
    .min(18)
    .max(80)
    .nonnegative({ message: "You can not set negative values." }),
  height: z
    .number()
    .min(100)
    .max(230)
    .nonnegative({ message: "You can not set negative values." }),
  weight: z
    .number()
    .min(30, { message: "Are you certain that your weight is below 30 kg?" })
    .max(200, { message: "Are you certain that your weight is above 200 kg?" })
    .nonnegative({ message: "You can not set negative values." })
});

type genericIntroduction = z.infer<typeof introductionSchema>;

const Introduction = () => {
  
  const swiper = useSwiper();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<genericIntroduction>({
    resolver: zodResolver(introductionSchema),
  });
  const validSubmit: SubmitHandler<genericIntroduction> = (formData) => {
    console.log(formData);
    setData(formData, 'dietAssistent')
    swiper.slideNext();
  };
  console.log(errors);
  return (
    <form className="flex flex-col gap-2">
      <div className="h-20">
        <label htmlFor="Gender" className="text-[#6E74B7] font-medium">
          Name
        </label>
        <select
          {...register("gender")}
          id="gender"
          defaultValue={"Pick your gender"}
          className="mt-1 block w-full rounded-md p-1 border-2 border-green"
        > 
          <option>Pick your gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender && <p className="text-sm text-red-500 py-1 mb-2">{errors.gender.message}</p>}
      </div>
      <div className="h-20">
        <label htmlFor="age" className="text-[#6E74B7] font-medium">
          Age
        </label>
        <input
          id="age"
          {...register("age", {
            setValueAs: (value) => (value !== "" ? Number(value) : ""),
          })}
          type="number"
          placeholder="Enter your age"
          className="mt-1 block w-full p-1 rounded-md border-2 border-green focus:border-violet"
        />
        {errors.age && <p className="text-sm text-red-500 py-1 mb-2">{errors.age.message}</p>}
      </div>
      <div className="h-20">
        <label htmlFor="email" className="text-[#6E74B7] font-medium">
          Height
        </label>
        <input
          id="height"
          {...register("height", {
            setValueAs: (value) => (value !== "" ? Number(value) : ""),
          })}
          type="number"
          placeholder="Enter your height in cm"
          className="mt-1 block w-full p-1 rounded-md border-2 border-green focus:border-violet"
        />
        {errors.height && <p className="text-sm text-red-500 py-1 mb-2">{errors.height.message}</p>}
      </div>
      <div className="h-20">
        <label htmlFor="email" className="text-[#6E74B7] font-medium">
          Weight
        </label>
        <input
          id="weight"
          {...register("weight", {
            setValueAs: (value) => (value !== "" ? Number(value) : ""),
          })}
          type="number"
          placeholder="Enter your weight in kg's"
          className="mt-1 block w-full p-1 rounded-md border-2 border-green focus:border-green"
        />
        {errors.weight && <p className="text-sm text-red-500 py-1 mb-2">{errors.weight.message}</p>}
      </div>
      <button
        type="button"
        onClick={handleSubmit(validSubmit)}
        className="next-btn mt-2 w-1/4 bg-[#5dbea3] hover:bg-[#4ca18f] text-white font-medium rounded-md px-4 py-2"
      >
        Next
      </button>
    </form>
  );
};

export default Introduction;
