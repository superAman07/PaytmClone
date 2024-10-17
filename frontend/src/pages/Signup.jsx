import Button from '../components/Button';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import { BottomWarning } from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="bg-gray-800 w-full max-w-lg rounded-lg shadow-xl p-8 space-y-6">
        <Heading label={"Create an Account"} className="text-4xl font-extrabold text-amber-400 text-center" />
        <SubHeading label={"Join us today! Enter your details below."} className="text-md text-gray-400 text-center" />

        <div className="space-y-4">
          <InputBox
            onChange={e=>{
              setFirstName(e.target.value);
            }}
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder="First Name"
            label="First Name"
          />
          <InputBox 
            onChange={e=>{
              setLastName(e.target.value);
            }}
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder="Last Name"
            label="Last Name"
          />
          <InputBox
            onChange={e=>{
              setUsername(e.target.value);
            }}
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder="youremail@example.com"
            label="Email Address"
          />
          <InputBox
            onChange={e=>{
              setPassword(e.target.value);
            }}
            className="w-full bg-gray-700 rounded-lg shadow-lg border border-gray-600 focus:ring-2 focus:ring-amber-400 focus:outline-none py-3 px-4 text-gray-200 placeholder-gray-400 transition duration-200 hover:bg-gray-600"
            placeholder="Password"
            type="password"
            label="Password"
          />
        </div>
        <div className="flex justify-center">
          <Button onPress={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{//we can use fetch...
              firstName:firstName,
              lastName,
              username,
              password
            });
            localStorage.setItem("token",response.data.token);
            localStorage.delete("token");

          }} label={"Sign up"} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:-translate-y-1 duration-200" />
        </div>

        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={'/signin'}/>
      </div>
    </div>
  );
};

export default Signup;