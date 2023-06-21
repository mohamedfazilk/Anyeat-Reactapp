import { useState,useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    
    const handleLogout =()=>{
        // localStorage.removeItem('fullName');
        // localStorage.removeItem('email');
        // localStorage.removeItem('password')
    }

    useEffect(() => {
        const storedFullName = localStorage.getItem("fullName");
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
    
        if (storedFullName && storedEmail && storedPassword) {
          setFullName('');
          setEmail('');
          setPassword('');
          setIsLoggedIn(true);
        }
      }, []);
      

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateFullname = () => {
        if(fullName.trim() === ''){
            setFullNameError('Please enter your full name')
            return false;
        }
        setFullNameError('');
        return true;
    }

    const validateEmail = () =>{
        if(email.trim() === ''){
            setEmailError('please enter your email address')
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setEmailError('please enter a valid email address');
            return false
        }
        setEmailError('');
        return true;
    }

    const validatePassword =()=>{
        if(password.trim() === ''){
        setPasswordError('please enter your password')
        return false;
        }
        // const passwordRegex = /^(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,}$/
        if(password.length < 8){
            setPasswordError('Password must be atleast 8 characters')
            return false;
        }
        setPasswordError('');
        return true;
        
    }

    const contextValue ={
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
        fullNameError,
        setFullNameError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        validateFullname,
        validateEmail,
        validatePassword,
        isLoggedIn, 
        setIsLoggedIn,
        handleLogout
    }


    return( <AuthContext.Provider value={contextValue}> 
    {children}
    </AuthContext.Provider>
)
}