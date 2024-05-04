import Link from "next/link";
import Image from "next/image";
import pandaCooker from "@public/home/pandaCooker.jpeg";
import pandaAssistent from "@public/home/pandaAssistent.jpeg";
import pandaCalculator from "@public/home/pandaCalculator.jpeg";

const Offer = () => {
  return (
    <section className="w-full py-8 md:py-8 lg:py-12 bg-gray-100 dark:bg-gray-800 flex justify-center">
      <div className="container text-center">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What We Offer
          </h1>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex flex-col sm:flex-row justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-2 border-4 border-green text-center">
            <div className="relative w-full h-80 sm:w-80 sm:h-auto rounded-lg">
              <Image
                style={{ borderRadius: "8px" }}
                alt="pandacooker"
                fill={true}
                src={pandaCooker}
                quality={100}
                priority={true}
              ></Image>
            </div>
            <div className="w-full sm:w-3/4 flex flex-col p-4">
              <h2 className="text-xl text-black font-bold mb-2">Cutting-Edge Web Apps</h2>
              <p className="text-black mb-4 text-justify">
                Our team of expert developers will build you a modern,
                responsive web application that is optimized for performance and
                scalability.
              </p>
              <Link
                className="p-2 w-full bg-green rounded-lg text-black font-bold"
                href="/kitchen"
              >
                Recipe database
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-2 border-4 border-green text-center">
            <div className="relative w-full h-80 sm:w-80 sm:h-auto rounded-lg">
              <Image
                style={{ borderRadius: "8px" }}
                alt="pandacooker"
                fill={true}
                src={pandaCalculator}
                quality={100}
                priority={true}
              ></Image>
            </div>
            <div className="w-full sm:w-3/4 flex flex-col p-4">
              <h2 className="text-xl text-black font-bold mb-2">Cutting-Edge Web Apps</h2>
              <p className="text-black mb-4 text-justify">
                Our team of expert developers will build you a modern,
                responsive web application that is optimized for performance and
                scalability.
              </p>
              <Link
                className="p-2 w-full bg-green rounded-lg text-black font-bold"
                href="/calculator"
              >
                Calculator
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-2 border-4 border-green text-center">
            <div className="relative w-full h-80 sm:w-80 sm:h-auto rounded-lg">
              <Image
                style={{ borderRadius: "8px" }}
                alt="pandacooker"
                fill={true}
                src={pandaAssistent}
                quality={100}
                priority={true}
              ></Image>
            </div>
            <div className="w-full sm:w-3/4 flex flex-col p-4">
              <h2 className="text-xl text-black font-bold mb-2">Cutting-Edge Web Apps</h2>
              <p className="text-black mb-4 text-justify">
                Our team of expert developers will build you a modern,
                responsive web application that is optimized for performance and
                scalability.
              </p>
              <Link
                className="p-2 w-full bg-green rounded-lg text-black font-bold"
                href="/assistent"
              >
                Panda assistent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
