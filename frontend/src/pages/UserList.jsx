import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        });
        setUsers(response.data.user);  
      } catch (error) {
        console.error("Error fetching users:", error.response ? error.response.data : error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleSendMoney = (userId) => {
    navigate(`/sendmoney?id=${userId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="bg-gray-800 w-full max-w-md rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-white mb-4">User List</h1>
        {users.length === 0 ? (
          <p className="text-gray-400">No users found.</p>
        ) : (
          users.map(user => (
            <div key={user.id} className="flex justify-between items-center mb-4">
              <span className="text-white">{user.name}</span>
              <button 
                onClick={() => handleSendMoney(user.id)}
                className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-lg"
              >
                Send Money
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
