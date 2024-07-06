
import React, { useState } from 'react';
import { login } from '../components/domain/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRole } from '../components/store/userSlice';
import '../styles/loginPage.css'
interface LoginScreenProps{
    onLogin: (userRole: string) => void;
}
const LoginScreen: React.FC<LoginScreenProps> = ({onLogin}) => {
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (event:React.FormEvent) => {
        event.preventDefault();
        if (!email.trim()) {
            setError('Please enter your email!');
            return;
        }
        if (!password.trim()) {
            setError('Please enter your password!');
            return;
        }
        try{
            const data= await login(email,password);
            setError('');
            dispatch(setRole(data.user.role));
            onLogin(data.user.role)
            alert(`Login successful! Hello, ${data.user.role}`)
            navigate('/booklist')
           

        }catch(err){
            setError("Login failed! \n Check your Email or Password again")
        }
    };

    return (
        <div className='detailsBoard' >
            <h2>Welcome to Bookii</h2>
            <form onSubmit={handleLogin}>
                <input className='input-field' placeholder='Email' type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <br/>
                <input className='input-field' placeholder='Password' type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <br/>
                <button id='edit-delete-button' type="submit" onClick={handleLogin}>Log in</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};


export default LoginScreen
