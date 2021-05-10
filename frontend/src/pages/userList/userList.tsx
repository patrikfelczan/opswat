import react from "react";
import { useState } from "react";
import { User } from "../../interfaces";
import "./userList.scss";
const Users =() => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const userList = await fetch(`http://localhost:8080/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const response = await userList.json();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  function write() {
    if (!token) {
      throw new Error("Authorization failed!");
    } else {
      fetchUsers();
      return users;
    }
  }

  const deleteUsers =  (e: any) => {
    fetch(`http://localhost/api/users/${e.target.id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response;
        }
        throw new Error("Connection failed!");
      })

      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={write}>List users</button>
      {users.map((user) => (
        <div className="users" key={user.id}>
          <p>
            // {user.username} // {user.email}
          </p>
          <button
            onClick={deleteUsers}
            className="delete-button"
            id={user.email}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Users;
