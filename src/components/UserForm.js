import React, { useEffect, useState } from 'react';

const UserForm = ({ onAdd, onUpdate, editingUser }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
      setErrors({});
    } else {
      setForm({ name: '', email: '', address: '', phone: '' });
      setErrors({});
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (editingUser) {
      onUpdate({ ...form });
    } else {
      onAdd({ ...form });
    }

    setForm({ name: '', email: '', address: '', phone: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-2">
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-2">
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Home Address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phone"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <button type="submit" className={`btn ${editingUser ? 'btn-success' : 'btn-primary'}`}>
        {editingUser ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserForm;
