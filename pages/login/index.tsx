import { useEffect, useRef, useState } from "react"
import styles from './stylesLogin.module.scss'
interface User {
    email:string
    password:string
}
type Map= {
    name?:string,id?:number
}
type Show= {
    show?:boolean,title?:string
}
const LoginPage = () =>{
    const emailRef = useRef<any>('')
    const passwordRef = useRef<any>('')
    const [toggleCreateSignin,setToggleCreateSignin] = useState(false)
    const [toggleNavbar,setToggleNavbar] = useState(false)
    const [resposeUrl,setResponseUrl] = useState('')
    
    function toggleFetchText(){
        setToggleCreateSignin(!toggleCreateSignin)
    toggleCreateSignin ? setResponseUrl('http://fuckYouDin:3002/signin'):setResponseUrl('http://fuckYouDin:3002/user')
    console.log(resposeUrl)
}
   const response= async()=>{ 
    const email = emailRef.current.value
    const pasword = passwordRef.current.value
    const documentUrl = await `${resposeUrl}`

    const login: User = {
        //password: title,
      //  email: email,
        email: email,
        password:pasword
      }

    console.log(resposeUrl)
    const headers = {

      'Content-Type': 'application/json'

    };
    const options = {

        method: 'POST',
        headers,
       
        body: JSON.stringify(login)
      };
      const res =   await fetch( `${documentUrl}`, options)

    }
    const [showElement1, setShowElement1] = useState(false);
    const [showElement2, setShowElement2] = useState(false);
    const [showElement3, setShowElement3] = useState(false);

        const people: Map[] = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
          ];


          const show: Show[] = [
            { show: showElement1 ,title: 'About'},
            { show: showElement2 ,title: 'Projects'},
            { show: showElement3 ,title: 'Skills'},
        
          ];
          const combinedArray: (Map & Show)[] = people.map((person, index) => ({
            ...person,
            ...show[index]
          }));
    useEffect(() => {
        animation(true)
    }, []);
    const animation=(show:boolean)=>{
        const timer1 = setTimeout(() => {
            setShowElement1(show);
          }, 1000);
          const timer2 = setTimeout(() => {
            setShowElement2(show);
          }, 2000);
          const timer3 = setTimeout(() => {
            setShowElement3(show);
          }, 3000);
  
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
const [possiton,setPossition] = useState(240)
async function myMove() {
    /*setShowElement1(!showElement1)
    setShowElement2(!showElement2)
    setShowElement3(!showElement3)*/
    setToggleNavbar(!toggleNavbar)
    let id:any = null;
    let pos:number = 240;
    let grow = 40
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
       
      if (pos == 40) {
        setPossition(40)
            clearInterval(id);

    
      }
      else if (grow == 242) {

        setPossition(242)
        clearInterval(id);

      }
       else if(possiton===40){
        animation(!showElement1)

grow++
setPossition(grow)
      }
      else {
        pos--; 
        pos = pos -4
        setPossition(pos-4)
        setShowElement1(false)
        setShowElement2(false)
        setShowElement3(false)
      }
    }
    return animation
  }

  
  const NavbarButton=({children}:any)=>{
const [animateNav,setAnimateNav] = useState(false)
    return <div className={[styles.navbar__btn_text,animateNav? styles.closed : ''].join(' ')}  style={{justifyContent:animateNav?'end':'space-between',display:'flex',flex:1,padding:'0 10px'}} onClick={()=>{myMove(),setAnimateNav(!animateNav)}}>{children}</div>
  }

    return (<div className="h-full"  style={{flex:1,flexDirection:'row',display:'flex', height: '100vh'}}>
    
    
        <div className={`h-full ${styles.navbar__container}`}  style={{width:possiton}}>
            {toggleNavbar?<NavbarButton>< ><p>{""}</p><div><p>{">"}</p><p className={styles.navbar__btn_last}>{"open"}</p></div></></NavbarButton>:<NavbarButton><><p className={''}>{"Menu"}</p><div><p>{"<"}</p><p className={styles.navbar__btn_last}>{"close"}</p></div></></NavbarButton>}
               {combinedArray.map((value:any|any[],index) => {
                    const [showElement4, setShowElement4] = useState(false);
                    const animation2=(show:boolean,time:number)=>{
                        const timer1 = setTimeout(() => {
                           setShowElement4(true)
                          }, time);
                    
                      return () => {
                        show;
                        clearTimeout(timer1);
                     
                      };
                    }
                const [mouseEntering, setMouseEntering] = useState(true);
                const [animationTime,setAnimationTime] = useState(false)
           const animation =     animation2(false,300)
              console.log(show[index])
              console.log("value",value)
              
            return(
          <nav key={value.id}> 
          <div className={[styles.element, showElement4? styles.show : ''].join(' ')} style={{margin:mouseEntering?'20px':'',fontSize:mouseEntering?15:28,backgroundColor:mouseEntering?'rgb(14, 14, 15)':'rgb(14, 14, 15)', animationDelay: `${index * 0.3}s`}} onMouseEnter={() => setMouseEntering(false)}
          onMouseLeave={() => setMouseEntering(true)}> <p style={{margin:mouseEntering?'0 auto':''}}>{value.title}</p></div>
          
          </nav>
       )} )}
        </div>
        <div style={{width:"20%"}}>
        <input ref={emailRef}/>
        <input ref={passwordRef}/>
        <button onClick={response} title="submit">{toggleCreateSignin ? "Login":"Create user"}</button>
        <p onClick={()=>toggleFetchText()}>create user</p></div>

        <div style={{height:10,width:2,backgroundColor:'white'}}><hr style={{width:10,backgroundColor:'white'}}/></div>
    </div>)
}
export default LoginPage