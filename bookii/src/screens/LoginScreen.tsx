
import React, { useState } from 'react';
import { User, login } from '../components/domain/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../components/store/store';
import { setRole } from '../components/store/userSlice';
interface LoginScreenProps{
    onLogin: (userRole: string) => void;
}
const LoginScreen: React.FC<LoginScreenProps> = ({onLogin}) => {
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const {status, error} = useSelector((state:RootState)=>state.user)


    const handleLogin = async (event:React.FormEvent) => {
        event.preventDefault();
        try{
            const data= await login(email,password);
            setError('');
            dispatch(setRole(data.user.role));
            onLogin(data.user.role)
            alert(`Login successful! Wilkommen ${data.user.role}`)
            navigate('/booklist')
           

        }catch(err){
            setError("Login failed!")
            alert("Can not find data");
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
                <label >Passwort:</label><br />
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required /><br /><br />
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};


export default LoginScreen
