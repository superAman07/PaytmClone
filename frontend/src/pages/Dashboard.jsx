import { AppBar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { User } from "../components/User";

const Dashboard = () => {
  return (
    <div className="flex justify-center bg-gray-900 p-8 h-[100%]">
      <div className="bg-gray-800 w-full  rounded-lg shadow-xl p-8">
       <AppBar/>
       <div>
          <h1 className="text-4xl font-extrabold text-amber-400 text-center">Dashboard</h1>
          <p className="text-md text-gray-400 text-center">Welcome to your dashboard!</p>
         <br/>
          <div>
            <Balance value={"10,000"}/>
            <User/>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;