import Image from "next/image";
import { Inter, Ribeye } from "next/font/google";
import background from '@/assets/backgroundImage.png'
import Logo from "@/components/logo";
import styles  from '@/pages/home/stylesHome.module.scss'
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

 
const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
export default function HomePage() {
  const [animate,setAnimate] = useState(0)
  const [animateHrWidth,setAnimateHrWidth] = useState(0)
  const [animateImage,setAnimateImage] = useState(0)
  const [animateLeftText,setAnimateLeftText] = useState(0)
  const [animateRightText,setAnimateRightText] = useState(0)
const animatImage=()=>{
let animate = 0
let leftTextAnimate = 0
let rightTextAnimate = 0

console.log(animate)
console.log("animate")
if(animate===200){
  animate=100
  
  
  
}
else if(animate===40){
 
  leftTextAnimate++
  setAnimateLeftText(leftTextAnimate)
 
}
else if(animate===100){
  rightTextAnimate++
  setAnimateRightText(rightTextAnimate)
}
else{
  animate++
  setAnimateImage(animate)
}

}
const animateOpacityImage = animatImage
  function myMove() {
    console.log("click")
    let id:any = null;
    let pos = 0;
    let width = 130
    let animate = 0
    let leftTextAnimate = 0
    let rightTextAnimate = 0
    id = setInterval(frame, 15);
    function frame(id:number) {
      if (pos === 230) {
      pos = 0
      width = 130
      animate = 100
     leftTextAnimate = 100
      setAnimate(pos)
      setAnimateHrWidth(width)
      
        
      }
      
      else if(animate===100){
        rightTextAnimate++
        pos=30
        setAnimate(20)
        setAnimateHrWidth(110)

        setAnimateRightText(rightTextAnimate)
      }
       else {
        pos++; 
        animate++; 
        width--;
        setAnimate(pos)
        setAnimateImage(animate)
        setAnimateHrWidth(width)
        setAnimateLeftText(animate)
        if(animate===40){
 
          leftTextAnimate++
          setAnimateLeftText(leftTextAnimate)
         
        }
       // console.log(pos)
      }
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center p-24" style={{ flex: 1 ,backgroundColor:'#131418'}}>
    <div style={{position:'absolute' ,width:'50%',height:'100%',backgroundColor:'#16191E',right:0}}>
   
    </div>
     <div style={{width: '90%', backgroundColor: '#23282E', zIndex:1}} className={styles.container}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      <div style={{height:40,marginLeft:animate,width:animateHrWidth,color:'white'}} onClick={
      ()=> { myMove(),animatImage}
      }><hr id="animate" style={{marginLeft:animate,width:animateHrWidth,color:'white'}}onClick={
      ()=>  myMove()
      }/>sss</div>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <span style={{justifyContent:'space-between'}}>
       <div className={styles.logo}>
       <Logo/>
        </div>   <div style={{alignContent:'start'}}>
       
          </div>
          <div  style={{alignItems:'center',height:'55%'}}>
<hr style={{marginLeft:animate,width:animateHrWidth,color:'white'}}/>
          </div>
<div style={{padding:'0 0 0 30px'}}>
         See my projects
    <div style={{width:130,height:100,backgroundColor:'gray'}}></div>
          </div>
        </span>
        <div style={{maxWidth:'100%',width:'100%',height:'auto'}}>
          <div style={{position:'absolute',display:'flex', justifyContent: 'space-between'}}>
            <div style={{}}> 
          <p style={{marginTop:100,fontWeight:1,fontFamily:'roboto', opacity:`${animateLeftText}%`}} >A FRONTEND DEVELOPER</p>
          <div style={{}}>
          <p style={{marginTop:5,fontWeight:46,fontFamily:'roboto-bold-light',fontSize:60, opacity:`${animateRightText}%`}} className={styles.leftText}>Alexander</p>
          <p style={{marginTop:-20,fontWeight:46,fontFamily:'roboto-bold-light',fontSize:60}}  className={styles.leftText}> Aspman</p>
          </div>
          <p style={{fontSize:10}}>
          I would love to contribute to your company!
            </p> 
            <p style={{fontSize:10}}>
              Please send me a message, I like to work hard</p> <p style={{fontSize:10}}>and I do so with a smile.
            </p>
            </div><div>
          </div>
          </div>
        

        <Image
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={800}
          height={800}
          style={{margin:'auto',opacity:`${animateImage}%`,animation:'ease-in',transformStyle:'inherit'}}
          className={''}
        />
        </div>
        <span>
        <p style={{position:'absolute',marginLeft:-250,fontWeight:3, width:160}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>

          <p style={{ writingMode: 'vertical-rl',marginTop:100}}>Link to my github</p>
          <p style={{ writingMode: 'vertical-rl',marginTop:40}}>Link to my linkedIn</p>
        
        </span>
      </div>
      </div>
      
    </main>
  );
}