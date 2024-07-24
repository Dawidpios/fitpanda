'use client'
import { useTransition } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { notFound } from 'next/navigation'


const FinalStep = () => {
  const [isPending, startTransition] = useTransition()

  const check = () => {
    startTransition(async () => {
      const local = localStorage.getItem('dietAssistent')
      const parsed = JSON.parse(local as string)
      const res = await fetch("http://localhost:5000/dietAssistent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed)
      })
      const result = await res.json()
      if(result.status !== 200) {
        notFound()
      }
    })
  }
  
  return (
    <div className="flex h-30 flex-col items-center justify-center bg-background ">
    <div className="mx-auto max-w-md text-center flex flex-col items-center
    ">
      <AiFillDownCircle className="text-7xl text-green align-middle"/>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Confirmation</h1>
      <p className="mt-4 text-muted-foreground">
        You have successfully completed the form. Click the button below to submit your information.
      </p>
      <div className="mt-6">
        <button
          type="submit"
          className={`next-btn mt-2 w-full bg-[#5dbea3] text-white font-medium rounded-md px-4 py-2 ${isPending ? 'bg-gray' : 'bg-green'}`}
          onClick={check}
        >
          {isPending ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  </div>
  );
};

export default FinalStep