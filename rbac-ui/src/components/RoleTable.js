import React from 'react';

const RoleTable = ({ roles, handleEdit, handleDelete }) => {
  return (
    <table className="table table-bordered table-striped">
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
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(role)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(role.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
