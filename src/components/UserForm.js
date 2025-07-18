import React, { useEffect, useState } from 'react';

const UserForm = ({ onAdd, onUpdate, editingUser }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
    } else {
      setName('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingUser) {
      onUpdate({ ...editingUser, name });
    } else {
      onAdd({ name });
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className={`btn ${editingUser ? 'btn-success' : 'btn-primary'}`}>
        {editingUser ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserForm;
