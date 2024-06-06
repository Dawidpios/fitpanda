
import Hero from "@src/components/component/home/hero";
import Offer from "@src/components/component/home/offer";
import Footer from "@src/components/component/home/footer";

const Home = async () => {

  return (
    <main className="sm: p-4 flex min-h-screen flex-col items-center justify-between lg:p-24">
      <Hero></Hero>
      <Offer></Offer>
      <Footer></Footer>
    </main>
  );
}

export default Home
