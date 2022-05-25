import React from "react";

export const UserList = ({ users, onDelete, onUpdate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Address</th>
          <th>DateOfBirth</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => onUpdate(user)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
