import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoney = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");
  // const name = searchParam.get("name");
  const [amount,setAmount]=useState(0);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
        <div className="bg-gray-800 w-full max-w-md rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Send Money</h1>
          <p className="text-gray-400 mb-6">Enter the amount you wish to send:</p> 
          <input 
            onChange={e=>{
              setAmount(e.target.value);
            }}
            type="text" 
            placeholder="Enter amount" 
            className="w-full p-3 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-4"
          />
          <button 
          onClick={()=>{
            console.log("Token from localStorage:", localStorage.getItem("token"));
            axios.post("http://localhost:3000/api/v1/account/transfer",{
              to:id,
              amount:amount
            },{
              headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
              }
            })
          }}
          className="bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-amber-400 transition duration-200 w-full">
            Confirm Transfer
          </button>
        </div>
      </div>
    );
  };