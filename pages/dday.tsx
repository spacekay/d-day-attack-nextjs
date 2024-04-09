"use client"

import { useSession } from "next-auth/react";
import Forbidden from "../components/forbidden";
import isCorrectSession from "../components/isCorrectSession";


const Dday = () =>{
  const { data: session } = useSession();
 if (isCorrectSession(session)) {
    return (
      <>
      <div className="container p-5 my-5 bg-dark text-white">
    <h1>My First Bootstrap Page {JSON.stringify(session)}</h1>
    <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
  </div>
      </>
  );
 } else {
  return <Forbidden/>
 }
};

export default Dday;