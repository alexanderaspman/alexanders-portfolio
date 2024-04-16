import styles from '@/styles/css/styles.module.css'
import { useRef, useState } from 'react';

interface User {
    password:string
    email: string;
    name: string;
  }
const LoginComponent = ( ) => {
    
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
const usernameInputRef = useRef<HTMLInputElement |null|any>()
const passwordInputRef = useRef<HTMLInputElement |null|any>()
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  
  const handleLoginUser = async () => {

    const enteredUsername:string = usernameInputRef.current.value;
    const enteredPasword:string = passwordInputRef.current.value;
console.log(enteredUsername)
console.log(enteredPasword)
    

  const newLogin: User = {
    password: enteredUsername,
    email: `${enteredPasword}`,
    name:'name'
  
  }
  const documentUrl = `http://localhost:3002/user`
  const headers = {
   // "Authorization":("Bearer "),
    'Content-Type': 'application/json'

  };

  const options = {

    method: 'POST',
    headers,
   
    body: JSON.stringify(newLogin)
  };
  const res =   await fetch( `${documentUrl}`, options)


  setEmail('');
  setPassword('')

};
    return(
        <div className="login">
     

        <form className={styles.login__form}>
           <h1 className={styles.login__title}>Login</h1>

           <div className={styles.login__inputs}>
              <div className={styles.login__box}>
                 <input type="email" placeholder="Email ID" required className={styles.login__input} ref={usernameInputRef}  />
                 <i className="ri-mail-fill"></i>
              </div>

              <div className={styles.login__box}>
                 <input type="password" placeholder="Password" required className={styles.login__input}  ref={passwordInputRef} />
                 <i className={styles.ri_lock_2_fill}></i>
              </div>
           </div>

           <div className={styles.login__check}>
              <div className={styles.login__check_box}>
                 <input type="checkbox" className={styles.login__check_input} id="user-check"/>
                 <label  className={styles.login__check_label}>Remember me</label>
              </div>

              <a href="#" className={styles.login__forgot}>Forgot Password?</a>
           </div>

           <button type="submit" className={styles.login__button} onClick={handleLoginUser}>Login</button>

           <div className={styles.login__register}>
              Don't have an account? <a href="#">Register</a>
           </div>
        </form>
     </div>
    )
}
export default LoginComponent