import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Gen: {user.gen}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
