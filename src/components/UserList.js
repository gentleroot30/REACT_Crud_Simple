import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-center">User List</h2>
      {users.length === 0 ? (
        <p className="text-center">No users found.</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <div><strong>Name:</strong> {user.name}</div>
              <div><strong>Email:</strong> {user.email}</div>
              <div><strong>Address:</strong> {user.address}</div>
              <div><strong>Phone:</strong> {user.phone}</div>
              <div className="mt-2">
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(user.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
