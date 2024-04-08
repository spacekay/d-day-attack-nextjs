import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";

const Dday = () =>{ 
  
  const { data: session } = useSession();
  
  return (
    <>
    <div className="container p-5 my-5 bg-dark text-white">
  <h1>My First Bootstrap Page {JSON.stringify(session.user.name)}</h1>
  <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
</div>
    </>
)};

export default Dday;