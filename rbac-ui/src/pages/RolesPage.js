import React, { useState } from 'react';

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });
  const [editRoleId, setEditRoleId] = useState(null);

  // Add or edit a role
  const handleAddOrEditRole = () => {
    if (editRoleId) {
      // Edit existing role
      setRoles(
        roles.map((role) =>
          role.id === editRoleId ? { ...role, ...newRole } : role
        )
      );
    } else {
      // Add new role
      setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    }
    setNewRole({ name: '', permissions: [] });
    setEditRoleId(null);
  };

  // Handle edit button click
  const handleEditClick = (role) => {
    setNewRole(role);
    setEditRoleId(role.id);
  };

  // Toggle permissions for a role
  const togglePermission = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  // Handle delete role
  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Role Management</h2>
      <table className="table table-bordered table-striped mt-4">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id}>
              <td>{index + 1}</td>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditClick(role)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteRole(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-5">{editRoleId ? 'Edit Role' : 'Add New Role'}</h3>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex">
            {['Read', 'Write', 'Delete'].map((perm) => (
              <div className="form-check me-3" key={perm}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={perm}
                  checked={newRole.permissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                />
                <label className="form-check-label" htmlFor={perm}>
                  {perm}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <button className="btn btn-primary w-100" onClick={handleAddOrEditRole}>
            {editRoleId ? 'Update Role' : 'Add Role'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
