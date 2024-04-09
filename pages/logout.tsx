"use client"

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Forbidden from "../components/forbidden";
import isCorrectSession from "../components/isCorrectSession";


const Logout = () => {
    const { data: session } = useSession();
    useEffect(()=>{
        signOut({ callbackUrl: '/', redirect:true });
    });
};

export default Logout;