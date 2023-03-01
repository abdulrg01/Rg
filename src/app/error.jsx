"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(()=> console.log(error), [error]);

  return (
    <div className="text-center mt-10">
       <h1>something went wrong</h1>
       <button className="hover:text-slate-700 p-2 rounded-lg bg-amber-600 mt-4" onClick={()=> reset()}>Try again</button>
    </div>
  )
}
