import Link from "next/link";

const Offer = () => {
  return (
    <section className="w-full py-8 md:py-8 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What We Offer
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 bg-white p-2 rounded-2xl border-4 border-green font-bold text-violet">
            We provide a wide range of services to help you bring your ideas to
            life. From web development to design, we have got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 border-4 border-green text-center">
            <h2 className="text-xl font-bold mb-2">Cutting-Edge Web Apps</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Our team of expert developers will build you a modern, responsive
              web application that is optimized for performance and scalability.
            </p>
            <Link
              className="p-2 w-3/4 self-center bg-green rounded-lg text-black font-bold"
              href="/kitchen"
            >
              Recipe database
            </Link>
          </div>
          <div className="flex flex-col justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 border-4 border-green text-center">
            <h2 className="text-xl font-bold mb-2">Stunning Designs</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Our designers will create a visually appealing and user-friendly
              interface that will delight your customers.
            </p>
            <Link
              className="p-2 w-3/4 self-center bg-green rounded-lg text-black font-bold"
              href="/calculator"
            >
              Calculator
            </Link>
          </div>
          <div className="flex flex-col justify-center align-middle bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 border-4 border-green text-center">
            <h2 className="text-xl font-bold mb-2">Effective Marketing</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Our marketing experts will help you reach your target audience and
              drive more traffic to your website.
            </p>
            <Link
              className="p-2 w-3/4 self-center bg-green rounded-lg text-black font-bold"
              href="/assistent"
            >
              Panda Assistent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
