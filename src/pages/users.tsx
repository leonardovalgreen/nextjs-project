import axios from "axios";
import Link from "next/link";
import { User } from "../../api/User";

export interface UsersProps {
  users?: User[]
}

const Users = ({ users } : UsersProps) => {

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
