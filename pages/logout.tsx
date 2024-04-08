import { signOut } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

const Logout = (req: NextRequest, res: NextResponse) => {
  signOut();
  // console.log(req);
  // NextResponse.redirect(`${req.nextUrl.origin}/`);
//   (
//   <>
//   <div className="container p-5 my-5 bg-dark text-white">
// <h1>My First Bootstrap Page</h1>
// <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
// </div>
//   </>
// )
};

export default Logout;