import { useSession } from "next-auth/react";


const Dday = () =>{
  const { data: session } = useSession();
 // dday, alarm, logout에 세션이 없는 사람이 접근하면 /로 가도록 바꿔야 함
 return (
   <>
   <div className="container p-5 my-5 bg-dark text-white">
 <h1>My First Bootstrap Page {JSON.stringify(session)}</h1>
 <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
</div>
   </>
)};

export default Dday;