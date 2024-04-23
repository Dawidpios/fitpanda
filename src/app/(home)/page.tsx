
import { Hero } from "@component/components/component/hero";

const Home = async () => {

  return (
    <main className="sm: p-10 flex min-h-screen flex-col items-center justify-between lg:p-24">
      <Hero></Hero>
    </main>
  );
}

export default Home
