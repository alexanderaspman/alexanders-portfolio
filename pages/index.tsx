import Image from "next/image";
import { Inter } from "next/font/google";
import background from '@/assets/backgroundImage.png'
import Logo from "@/components/logo";
const inter = Inter({ subsets: ["latin"] });

 
const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24" style={{ flex: 1 ,backgroundColor:'#131418'}}>
    <div style={{position:'absolute' ,width:'50%',height:'100%',backgroundColor:'#16191E',right:0}}>
   
    </div>
     <div style={{width: '90%', backgroundColor: '#23282E', zIndex:1}}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      <div style={{width:'auto',height:40}}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <span style={{justifyContent:'space-between'}}>
          <div style={{alignContent:'start'}}>
          <Logo/>
          </div>
          <div  style={{alignItems:'center',height:'55%'}}>
<hr/>
          </div>
<div style={{padding:'0 0 0 30px'}}>
         See my projects
    <div style={{width:130,height:100,backgroundColor:'gray'}}></div>
          </div>
        </span>
        <div style={{minWidth:'80%',height:'auto'}}>
          <div style={{position:'absolute',display:'flex', justifyContent: 'space-between'}}>
            <div style={{width:800}}>
          <p style={{marginTop:100,fontWeight:1,fontFamily:'roboto'}}>A FRONTEND DEVELOPER</p>
          <div style={{}}>
          <p style={{marginTop:5,fontWeight:46,fontFamily:'roboto-bold-light',fontSize:60}}>Alexander</p><p style={{marginTop:-20,fontWeight:46,fontFamily:'roboto-bold-light',fontSize:60}}> Aspman</p>
          </div>
          <p style={{fontSize:10}}>
          I would love to contribute to your company!
            </p> 
            <p style={{fontSize:10}}>
              Please send me a message, I like to work hard</p> <p style={{fontSize:10}}>and I do so with a smile.
            </p>
            </div><div>
          <p style={{marginTop:50,fontWeight:3, width:160}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>
          </div>
          </div>
        

        <Image
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={800}
          height={800}
          style={{margin:'auto'}}
        />
        </div>
        <span>
          <p style={{ writingMode: 'vertical-rl',marginTop:100}}>Link to my github</p>
          <p style={{ writingMode: 'vertical-rl',marginTop:40}}>Link to my linkedIn</p>
        
        </span>
      </div>
      </div>
      
    </main>
  );
}