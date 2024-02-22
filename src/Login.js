import React, { useState } from 'react'
import './style/forms.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
    const[formData,setFormData] = useState({
        leaderEmail:'',
        password:''
    })

    const handleChange = (event) =>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('https://bug-battle-backend.onrender.com/users/login',formData);
            localStorage.setItem('user',JSON.stringify(response.data));
            navigate('/instructions');
        }catch(error){
          console.log(error)
        }
    }
  return (
    <div className='container'>
      
        <form className='form1' onSubmit={handleSubmit}>
        <div className='field'>
            <div>
            <label className='label'>Leader Email</label>
            <input type="email" name="leaderEmail" placeholder="Enter leader's Email"
              value={formData.leaderEmail}
              onChange={handleChange}></input>
            </div>
            <div>
            <label className='label'>Password</label>
            <input type="password" name="password" placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}></input>
            </div>
            
            <button className='btn'>LOGIN</button>
            </div>
        </form>
      </div>
  )
}

export default Login
