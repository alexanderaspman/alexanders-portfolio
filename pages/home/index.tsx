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
     <div className={styles.container} style={{width: '100%', zIndex:1,maxWidth:'1380px'}}>
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

          <div style={{}} className={styles.card}>
          <p style={{fontWeight:1,fontFamily:'roboto'}} className={styles.card__text_title}>FRONTEND DEVELOPER</p>
          <div style={{}}>
          <p  className={styles.card__text_center}>Alexander Aspman</p>
          </div>
          <p style={{fontSize:10}} className={styles.card__text_last}>

          I would love to contribute to your company!
           
              Please send me a message, I work hard and I do so with a smile.
            </p>
            </div><div>
          
          </div>
          </div>
          <div  style={{alignItems:'center',height:'60%'}}>
<hr/>
          </div>
<div className={styles.card__projects} style={{padding:'0 0 0 30px'}}>
      <p>See my projects</p>   
    <div style={{width:130,height:100,backgroundColor:'gray'}}></div>
          </div>
         
        </span>
        <div >
        
        

        <Image
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={1300}
          height={1300}
          style={{margin:'auto'}}
        />
        </div>
        <span>
        <p className={styles.text_quote} style={{}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>
          <p className={styles.text_link} style={{ writingMode: 'vertical-rl',marginTop:100}}>Link to my github</p>
          <p className={styles.text_link}  style={{ writingMode: 'vertical-rl',marginTop:40}}>Link to my linkedIn</p>
        
        </span>
      </div>
      </div>
      
    </main>
  );
}

export default HomePage