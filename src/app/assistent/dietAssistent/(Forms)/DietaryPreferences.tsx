"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSwiper } from "swiper/react";
import setData from "./setData";

const dietaryPreferencesSchema = z.object({
  fruits: z.boolean(),
  vegetables: z.boolean(),
  meat: z.boolean(),
  vege: z.boolean(),
  fish: z.boolean(),
  dairy: z.boolean(),
  grains: z.boolean(),
  nuts: z.boolean(),
});

type dietaryPreferences = z.infer<typeof dietaryPreferencesSchema>;

const DietaryPreferences = () => {
  const swiper = useSwiper();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<dietaryPreferences>({
    resolver: zodResolver(dietaryPreferencesSchema),
  });

  const checkIfAnyIsChecked = (data: dietaryPreferences) => {
    const newData = Object.entries(data).map((item) => {
      if (item.includes(true)) {
        return item[0];
      }
    }).filter((key): key is string => key !== undefined);;

    return newData;
  };
  const validSubmit: SubmitHandler<dietaryPreferences> = (formData) => {
    const validValues = checkIfAnyIsChecked(formData);

    if (!validValues.length) {
      setError("root", {
        type: "custom",
        message: "You should pick at least one food preference...",
      });
      return;
    }

    setData(validValues, "dietAssistent", false);
    swiper.slideNext();
  };

  const prevStep = () => {
    swiper.slidePrev();
  };

  return (
    <div className="max-w-md mx-auto space-y-1 h-full bg-card">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Select your food preferences</h2>
        <div className="flex w-full justify-center">
          {errors.root && (
            <p className="text-sm text-red-500 mb-2">{errors.root.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 space-y-2">
        <div className="flex items-center space-x-2">
          <input {...register("fruits")} type="checkbox" id="option1" />
          <label htmlFor="option1">Fruits</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("vegetables")} type="checkbox" id="option2" />
          <label htmlFor="option2">Vegetables</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("meat")} type="checkbox" id="option3" />
          <label htmlFor="option3">Meat</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("vege")} type="checkbox" id="option4" />
          <label htmlFor="option4">Vege</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("fish")} type="checkbox" id="option5" />
          <label htmlFor="option5">Fish and seafood</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("dairy")} type="checkbox" id="option6" />
          <label htmlFor="option6">Dairy</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("grains")} type="checkbox" id="option7" />
          <label htmlFor="option7">Grains and grain products</label>
        </div>
        <div className="flex items-center space-x-2">
          <input {...register("nuts")} type="checkbox" id="option8" />
          <label htmlFor="option8">Nuts and seeds</label>
        </div>
        <div className="w-full flex gap-4 mt-10">
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
      </div>
    </div>
  );
};

export default DietaryPreferences;
