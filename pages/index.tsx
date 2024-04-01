import Image from "next/image";
import { Inter } from "next/font/google";
import background from '@/assets/backgroundImage.png'
import Logo from "@/components/logo"
import HomePage from './home/index'
const inter = Inter({ subsets: ["latin"] });

 
const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
export default function Home() {
  return (
    <HomePage/>
  );
}