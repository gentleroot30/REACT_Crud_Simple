import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
    toast.success("User added successfully!");
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
    toast.success("User updated successfully!");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success("User deleted successfully!");
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React CRUD App with Toasts</h1>
      <UserForm onAdd={addUser} onUpdate={updateUser} editingUser={editingUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
      
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
