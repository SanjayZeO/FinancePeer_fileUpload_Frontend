import { useState } from 'react'
import './styles/login.css'

function Login(){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    async function loginUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:2307/api/login', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        email,
        password

          })
         })
        
         const data = await response.json()
         if(data.user){
             localStorage.setItem('token',data.user)
             alert('login successful')
             window.location.href='/Main'
         }else{
             alert('Login failed . please check your email or password..')
         }
         console.log(data);
        }

        return (
            <div id="login">
                <h1>
                    Login
                </h1>
                <form onSubmit={loginUser}>
                    <input class="box"
                    value ={email}
                    onChange={(e)=>{setemail(e.target.value)}}
                    type="email"
                    placeholder='Email'
                    />
                    <br/><br/>
                    <input class="box"
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                    type="password"
                    placeholder='Password'
                    />
                    <br/><br/>
                    <input class="button"
                    type="submit"
                    value="Login"
                    />
                    <br/><br/>

                    Don't have an account? <a href="/register">Sign Up</a>


                </form>
            </div>
        );

}
export default Login;