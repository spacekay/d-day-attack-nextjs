import { Inter } from "next/font/google";
import Navbar from "./navbar";
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
        <Navbar />
  );
}