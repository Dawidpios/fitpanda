"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSwiper } from "swiper/react";
import setData from "./setData";

const activitySchema = z.object({
  activity: z.enum(['Minimal', 'Low', 'Medium', 'High'], { message: "You should pick some value..." }),
  intensity: z.enum(['Very low', 'Low', 'Medium', 'High', 'Very high'], { message: "You should pick some value..." }),
  goal: z.enum(['Improve health', 'To lose weight', 'To maintain weight', 'To increase weight'], { message: "You should pick some value..." })
});

type genericActivity = z.infer<typeof activitySchema>;

const Activity = () => {
  const swiper = useSwiper();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<genericActivity>({
    resolver: zodResolver(activitySchema),
  });

  const validSubmit: SubmitHandler<genericActivity> = (formData) => {
    console.log(formData);
    setData(formData, 'dietAssistent')
    swiper.slideNext();
  };

  const prevStep = () => {
    swiper.slidePrev();
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="h-20">
        <label htmlFor="activity" className="text-[#6E74B7] font-medium">
          Activity
        </label>
        <select
          {...register("activity")}
          id="activity"
          defaultValue={"Pick your gender"}
          className="mt-1 block w-full rounded-md p-1 border-2 border-green"
        >
          <option>Activity frequency</option>
          <option>Minimal</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        {errors.activity && (
          <p className="text-sm text-red-500 py-1 mb-2">{errors.activity.message}</p>
        )}
      </div>
      <div className="h-20">
        <label htmlFor="age" className="text-[#6E74B7] font-medium">
          Training intensity
        </label>
        <select
          {...register("intensity")}
          id="intensity"
          defaultValue={"Training intensity"}
          className="mt-1 block w-full rounded-md p-1 border-2 border-green"
        >
          <option>Training intensity</option>
          <option>Very low</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Very high</option>
        </select>
        {errors.intensity && (
          <p className="text-sm text-red-500 py-1 mb-2">{errors.intensity.message}</p>
        )}
      </div>
      <div className="h-20">
        <label htmlFor="email" className="text-[#6E74B7] font-medium">
          Training goal
        </label>
        <select
          {...register("goal")}
          id="goal"
          defaultValue={"Training goal"}
          className="mt-1 block w-full rounded-md p-1 border-2 border-green"
        >
          <option>Training goal</option>
          <option>Improve health</option>
          <option>To lose weight</option>
          <option>To maintain weight</option>
          <option>To increase weight</option>
        </select>
        {errors.goal && (
          <p className="text-sm text-red-500 py-1 mb-2">{errors.goal.message}</p>
        )}
      </div>
      <div className="w-full flex gap-4 mt-20">
        <button
          type="button"
          onClick={prevStep}
          className="next-btn mt-2 w-1/4 bg-[#5dbea3] hover:bg-[#4ca18f] text-white font-medium rounded-md px-4 py-2"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleSubmit(validSubmit)}
          className="next-btn mt-2 w-1/4 bg-[#5dbea3] hover:bg-[#4ca18f] text-white font-medium rounded-md px-4 py-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Activity;
