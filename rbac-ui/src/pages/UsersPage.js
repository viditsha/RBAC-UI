import React, { useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Vidit', email: 'vidit@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Abhishek', email: 'abhishek@gmail.com', role: 'Editor', status: 'Inactive' },
  ]);
  
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });
  const [editUserId, setEditUserId] = useState(null);

  // Add or edit a user
  const handleAddOrEditUser = () => {
    if (editUserId) {
      // Edit existing user
      setUsers(
        users.map((user) =>
          user.id === editUserId ? { ...user, ...newUser } : user
        )
      );
    } else {
      // Add new user
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }
    setNewUser({ name: '', email: '', role: '', status: 'Active' });
    setEditUserId(null);
  };

  // Handle edit button click
  const handleEditClick = (user) => {
    setNewUser(user);
    setEditUserId(user.id);
  };

  // Handle delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>User Management</h2>
      <table className="table table-bordered table-striped mt-4">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className={`btn btn-sm ${
                    user.status === 'Active' ? 'btn-success' : 'btn-secondary'
                  }`}
                  onClick={() =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id
                          ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' }
                          : u
                      )
                    )
                  }
                >
                  {user.status}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-5">{editUserId ? 'Edit User' : 'Add New User'}</h3>
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" onClick={handleAddOrEditUser}>
            {editUserId ? 'Update User' : 'Add User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
