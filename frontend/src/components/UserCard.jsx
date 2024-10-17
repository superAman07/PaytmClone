import { Link, useNavigate } from "react-router-dom";

const UserCard = ({ id, user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2 sm:mb-0">
        <h2 className="rounded-full bg-slate-400 text-center h-10 w-10 flex items-center justify-center text-xl font-bold text-gray-800">
          {user.charAt(0).toUpperCase()}

        </h2>
        <h2 className="text-white text-lg font-semibold pl-3">{user}</h2>
      </div>
      <div>
        <Link 
          onClick={() => {
            navigate("/send?id=" + id + "&name=" + user);
          }}
          to={"/sendmoney"} 
          className="bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-amber-400 transition duration-200"
        >
          Send Money
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
