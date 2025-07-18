import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React CRUD App with Bootstrap</h1>
      <UserForm onAdd={addUser} onUpdate={updateUser} editingUser={editingUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
