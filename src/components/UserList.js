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
            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
              {user.name}
              <div>
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
