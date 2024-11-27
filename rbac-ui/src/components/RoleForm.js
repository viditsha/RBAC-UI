import React from 'react';

const RoleForm = ({ role, handleChange, handleSubmit }) => {
  const permissions = ['Read', 'Write', 'Delete'];

  return (
    <div className="row g-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Role Name"
          value={role.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="col-md-12 mt-3">
        <h5>Permissions</h5>
        <div className="d-flex">
          {permissions.map((perm) => (
            <div className="form-check me-3" key={perm}>
              <input
                className="form-check-input"
                type="checkbox"
                id={perm}
                checked={role.permissions.includes(perm)}
                onChange={() => handleChange('permissions', perm)}
              />
              <label className="form-check-label" htmlFor={perm}>
                {perm}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          {role.id ? 'Update Role' : 'Add Role'}
        </button>
      </div>
    </div>
  );
};

export default RoleForm;
