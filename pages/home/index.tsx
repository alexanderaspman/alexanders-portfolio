import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import styles from '@/pages/home/styleHome.module.scss'

const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
const HomePage=() =>{
  return (
    <main className={`flex min-h-screen ` } style={{backgroundColor:'#131418',width:'100%'}}>
    <div style={{position:'absolute' ,width:'50%',height:'100%',backgroundColor:'#16191E',right:0}}>
   
    </div>
     <div style={{/*width: '100%', backgroundColor: '#23282E', zIndex:1,maxWidth:'1380px',margin:'auto'*/}} className={styles.container}>
      <ul >{/*
        <li>Home</li>
        <li>About</li>
  <li>Skills</li>
  items-center justify-center
  */}
        </ul>
      <div style={{width:'auto',height:40}}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between',height:'auto'}} >
        <span style={{justifyContent:'space-between',width:'10%'}}>
          <div style={{alignContent:'start'}}>
          <Logo/>
          </div>
          <div style={{position:'absolute',paddingLeft:50}}>
          <div style={{}} className={styles.card}>
          <p style={{fontWeight:1,fontFamily:'roboto'}} className={styles.card__text_jobdescription}>FRONTEND DEVELOPER</p>
          <div style={{}}>
          <p  className={styles.card__text_name}>Alexander Aspman</p>
          </div>
          <p style={{fontSize:10}} className={styles.card__text_quote}>
          I would love to contribute to your company!
          
              I work hard and I willingly do so with a smile, send me a message
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
        <div className={styles.container__body}>
        
        

        <Image
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={1000}
          height={1000}
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