import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import styles from '@/pages/home/styleHome.module.scss'

const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
const HomePage=() =>{
  return (
    <main className="flex min-h-screen items-center justify-center" style={{ flex: 1 ,backgroundColor:'#131418',width:'100%'}}>
    <div style={{position:'absolute' ,width:'50%',height:'100%',backgroundColor:'#16191E',right:0}}>
   
    </div>
     <div style={{width: '100%', backgroundColor: '#23282E', zIndex:1,maxWidth:'1380px'}}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      <div style={{width:'auto',height:40}}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between',height:'auto'}}>
        <span style={{justifyContent:'space-between',width:'10%'}}>
          <div style={{alignContent:'start'}}>
          <Logo/>
          </div>
          <div style={{position:'absolute',paddingLeft:50}}>
            <div style={{}}>
          <p style={{marginTop:250,fontWeight:1,fontFamily:'roboto'}}>A FRONTEND DEVELOPER</p>
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
          
          </div>
          </div>
          <div  style={{alignItems:'center',height:'60%'}}>
<hr/>
          </div>
<div style={{padding:'0 0 0 30px'}}>
         See my projects
    <div style={{width:130,height:100,backgroundColor:'gray'}}></div>
          </div>
         
        </span>
        <div style={styles.middleContainer}>
        
        

        <Image
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={1300}
          height={1300}
          style={{margin:'auto'}}
        />
        </div>
        <span>
        <p style={{marginTop:50,fontWeight:3, width:160,position:'absolute',marginLeft:-240}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>
          <p style={{ writingMode: 'vertical-rl',marginTop:100}}>Link to my github</p>
          <p style={{ writingMode: 'vertical-rl',marginTop:40}}>Link to my linkedIn</p>
        
        </span>
      </div>
      </div>
      
    </main>
  );
}

export default HomePage