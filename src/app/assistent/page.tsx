import Image from "next/image";
import Link from "next/link";
import pandaAvatar from "@public/assistent/pandaAvatar.jpeg";
import trainingPlan from "@public/assistent/trainingPlan.jpeg";
import dietPlan from "@public/assistent/dietPlan.jpeg";
import chatPanda from "@public/assistent/chatPanda.jpeg";

const Assistent = () => {
  return (
    <div className="sm:flex flex-col md:grid grid-cols-[280px_1fr] gap-8 p-8">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-lg mb-2">
        <Image
          src={pandaAvatar}
          alt="Sidebar image"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-violet">Welcome to Panda assistent</h3>
          <p className="text-muted-foreground">
            Pick topics that you are interested in.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col relative bg-white overflow-hidden rounded-lg shadow-lg md:transition-transform duration-300 ease-in-out md:hover:-translate-y-2 hover:shadow-xl">
          <Image
            src={trainingPlan}
            alt="Product 1"
            width={400}
            height={300}
            className="h-56 w-full object-fit"
          />
          <div className="p-4 h-36">
            <h3 className="text-lg font-bold text-violet">Training Plan</h3>
            <p className="text-muted-foreground font-bold">
              Panda will help you create a training plan.
            </p>
          </div>
          <button className="w-2/3 m-4 p-2 self-center bg-green rounded-xl font-bold text-white">
            <Link href="/assistent/training">GO TO TRAINING ASSISTENT</Link>
          </button>
        </div>
        <div className="flex flex-col relative bg-white overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Image
            src={dietPlan}
            alt="Product 2"
            width={400}
            height={300}
            className="h-56 w-full object-fit"
          />
          <div className="p-4 h-36">
            <h3 className="text-lg font-bold text-violet">Diet</h3>
            <p className="text-muted-foreground font-bold">
              Panda will explain to you the secrets of an effective diet.
            </p>
          </div>
          <button className="w-2/3 m-4 p-2 self-center bg-green rounded-xl font-bold text-white">
            <Link href="/assistent/dietAssistent">GO TO DIET ASSISTENT</Link>
          </button>
        </div>
        <div className="flex flex-col relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Image
            src={chatPanda}
            alt="Product 3"
            width={400}
            height={300}
            className="h-56 w-full object-fit"
          />
          <div className="p-4 h-36">
            <h3 className="text-lg text-violet font-bold">
              Chat with assistent
            </h3>
            <p className="text-muted-foreground font-bold">
              You can start a conversation with Panda about sport or anything.
            </p>
          </div>
          <button className="w-2/3 m-4 p-2 self-center bg-green rounded-xl font-bold text-white">
            <Link href="/assistent/chat">CHAT WITH PANDA</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistent;
