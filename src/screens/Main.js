import React from 'react'
import jwt from 'jsonwebtoken'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import './styles/dash.css'


const Main = () =>{
    const history = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
            }else{
                // populateDash()
            }

        }
    }, [])

    return(
        <div id="main">
            <div className="mainButtons">
                <a href="/upload">Upload Data</a>
            </div>
            <br/>
            <div className="mainButtons">
                <a href="/view">View Uploaded Data</a>
            </div>
        </div>
    )
}

export default Main
