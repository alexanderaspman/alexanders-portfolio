import LoginComponent from "@/components/loginComponent"
import Image from "next/image"
const Login = ( ) => {
    return(
<div className="min-h-screen min-w-screen flex justify-center">
<Image
src="https://media.crystallize.com/alexanderaspmannu/24/4/4/1/designer-4.png"
alt="Picture of the author"
width={1300}
height={1300}
style={{position:'absolute'}}
/>       <LoginComponent/>
       </div>
    )
}
export default Login