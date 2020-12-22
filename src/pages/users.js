import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
