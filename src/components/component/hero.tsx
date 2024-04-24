import Image from "next/image";
import { Button } from "@component/components/ui/button";
import hero from "../../../public/hero/hero.jpeg";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="gap-5 flex w-full flex-col md:flex-row justify-center">
        <div className="w-full h-72 lg:w-1/2 xl:w-80 relative mr-2">
          <Image
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-fill sm:w-full"
            fill={true}
            src={hero}
            placeholder="blur"
            priority
            quality={100}
          />
        </div>

        <div className="flex flex-col justify-center space-y-2 bg-white p-2 rounded-2xl border-4 border-green">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-violet self-start">
            Test
          </h1>
          <div className="space-y-2">
            <p className="max-w-[600px] text-gray-500 md:text-xl text-violet font-bold">
              Discover our cutting-edge solutions and transform your business
              into a digital powerhouse.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start gap-2 min-[400px]:flex-row">
            <Button className="bg-black text-green">Get Started</Button>
            <Button className="bg-black text-green">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
