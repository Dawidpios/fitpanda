
import Hero from "@component/components/component/home/hero";
import Offer from "@component/components/component/home/offer";

const Home = async () => {

  return (
    <main className="sm: p-10 flex min-h-screen flex-col items-center justify-between lg:p-24">
      <Hero></Hero>
      <Offer></Offer>
    </main>
  );
}

export default Home
