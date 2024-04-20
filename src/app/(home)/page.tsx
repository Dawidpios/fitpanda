
import { Hero } from "@component/components/component/hero";


const Home = async () => {

  
  const get = await fetch('http://localhost:8080/')
  const res = await get.json()

  console.log(res.message)
 

  return (
    <main className="sm: p-10 flex min-h-screen flex-col items-center justify-between lg:p-24">
      <Hero></Hero>
      <p>{res.message}</p>
    </main>
  );
}

export default Home
