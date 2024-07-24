"use client";
import Introduction from "./(Forms)/Introduction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Activity from "./(Forms)/Activity";
import DietaryPreferences from "./(Forms)/DietaryPreferences";
import FinalStep from "./(Forms)/FinalStep";

const DietAssistent = () => {
  return (
    <div className="mt-2 m-2 w-full bg-white max-w-xl mx-auto py-2 md:py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="space-y-10">
        <div className="space-y-4 h-full sm:h-80">
          <Swiper
            spaceBetween={50}
            pagination-clickable="true"
            slidesPerView={1}
            allowTouchMove={false}
          >
            <SwiperSlide>
              <Introduction />
            </SwiperSlide>
            <SwiperSlide>
              <Activity />
            </SwiperSlide>
            <SwiperSlide>
              <DietaryPreferences />
            </SwiperSlide>
            <SwiperSlide>
              <FinalStep />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-end"></div>
      </div>
    </div>
  );
};

export default DietAssistent;
