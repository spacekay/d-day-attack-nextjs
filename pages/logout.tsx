import { signOut } from "next-auth/react";
import { useEffect } from "react";


const Logout = () => {
 useEffect(()=>{
 signOut({ callbackUrl: '/', redirect:true });
 });
};

export default Logout;