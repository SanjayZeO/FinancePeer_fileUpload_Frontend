import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css'

function Register(){
    const history = useNavigate()
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password, setpassword] = useState('')

    async function registerUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:2307/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name,
            email,
            password
        })
     })

     const data = await response.json()
     if(data.status === 'ok'){
         history('/login')
     }
     console.log(data)

    }

    return (
        <div>
            <h1>
                Register
            </h1>
        <form onSubmit={registerUser}>
        <input className="box" 
        value = {name} 
        onChange={(e)=>setname(e.target.value)} type="text" 
        placeholder="Name" />
        <br></br>
        <input className="box" 
        value = {email} 
        onChange={(e)=>setemail(e.target.value)} 
        type="email" 
        placeholder="Email" />
        <br></br>
        <input className="box" 
        value = {password} 
        onChange={(e)=>setpassword(e.target.value)} 
        type="password" 
        placeholder="Password" />
        <br/>
        <input className="button" 
        type="submit" 
        value="Register"/>
        <br/>
        <br/>


        Already have an account? <a href="/login">Login</a>

        

          </form>
        </div>
    );

}
export default Register;