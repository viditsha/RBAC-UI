import React from 'react';

const UserForm = ({ user, handleChange, handleSubmit, roles }) => {
  return (
    <div className="row g-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={user.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={user.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          value={user.role}
          onChange={(e) => handleChange('role', e.target.value)}
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-12 mt-3">
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          {user.id ? 'Update User' : 'Add User'}
        </button>
      </div>
    </div>
  );
};

export default UserForm;
