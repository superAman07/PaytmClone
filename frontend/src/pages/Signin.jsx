import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { BottomWarning } from '../components/BottomWarning';
import { useState } from 'react';  
import axios from 'axios'; 

const Signin = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSignIn = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        username: email,  
        password: password,
      });
      const token = response.data.token; 
      localStorage.setItem("token", token);  
      console.log("Token saved:", token); 
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="bg-gray-800 w-full max-w-lg rounded-lg shadow-xl p-8 space-y-6">
        <Heading label={"Sign In to Your Account"} className="text-4xl font-extrabold text-amber-400 text-center" />
        <SubHeading label={"Welcome back! Enter your credentials to log in."} className="text-md text-gray-400 text-center" />

        <form onSubmit={handleSignIn} className="space-y-4">  
          <InputBox
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder={"youremail@example.com"}
            label="Email Address"
            value={email}  
            onChange={(e) => setEmail(e.target.value)} 
          />
          <InputBox
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder={"********"}
            label="Password"
            type="password"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
          />
          
          <div className="flex justify-between items-center">
            <Link to="#" className="text-blue-400 hover:underline text-sm">Forgot your password?</Link>
          </div>

          <div className="flex justify-center">
            <Button type="submit" label={"Sign In"} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg" />
          </div>
        </form>

        <BottomWarning label={"Don't have an account? "} buttonText={"Sign up"} to={"/signup"} className="text-sm text-gray-400" />
      </div>
    </div>
  );
};

export default Signin;