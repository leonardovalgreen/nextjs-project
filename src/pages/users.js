import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Users = ({ users }) => {
  // Client Side Render

  //  const [users, setUsers] = useState([]);

  //  const fetchUsers = async () => {
  //    const response = await axios.get(
  //      "https://jsonplaceholder.typicode.com/users"
  //    );
  //    const data = await response.data;

  //    setUsers(data);
  //  };

  //  useEffect(() => {
  //    fetchUsers();
  //  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link href="/profile/[id]" as={`/profile/${user.id}`}>
          <a>{user.name}</a>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;

  return {
    props: { users: data },
  };
}

export default Users;
