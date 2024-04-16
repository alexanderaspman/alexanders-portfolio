import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import style from '@/pages/'
import HomePage from "./home";
import LoginComponent from "@/components/loginComponent";
import Login from "./login";
const inter = Inter({ subsets: ["latin"] });

 
const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
export default function Home() {
  return (
     
      <Login/>
   
  );
}