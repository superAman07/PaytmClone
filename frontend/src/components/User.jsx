import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import UserCard from "./UserCard";
import axios from "axios";

export const User = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then(response => {
        console.log("API Response:", response.data); 
        setUsers(Array.isArray(response.data.user) ? response.data.user : []); 
      })
      .catch(error => {
        console.error("Error fetching users:", error);  
        setUsers([]); 
      });
  }, [filter]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="text-white text-2xl font-bold mb-4">Users</div>
      <InputBox
        onChange={e => setFilter(e.target.value)}
        className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search user..."
      />
      <div className="flex flex-col space-y-4">
        {users && users.length > 0 ? (
          users.map(user => (
            <UserCard key={user._id} id={user._id} user={`${user.firstName} ${user.lastName}`} />
          ))
        ) : (
          <p className="text-white">No users found.</p>
        )}
      </div>
    </div>
  );
};
