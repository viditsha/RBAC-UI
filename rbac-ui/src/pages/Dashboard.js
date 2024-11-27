import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white">
        <h3 className="text-center py-4">Admin Panel</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="/users">
              <i className="bi bi-people"></i> User Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/roles">
              <i className="bi bi-shield-lock"></i> Role Management
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link text-white" href="/settings">
              <i className="bi bi-gear"></i> Settings
            </a>
          </li> */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="bg-primary text-white py-3 px-4">
          <h2>Welcome to the Admin Dashboard</h2>
          <p className="mb-0">Manage users, roles, and more with ease.</p>
        </header>

        <div className="container mt-4">
          <div className="row g-4">
            {/* Cards */}
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text display-4 text-primary">120</p>
                  <a href="/users" className="btn btn-primary btn-sm">
                    View Users
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Roles Defined</h5>
                  <p className="card-text display-4 text-success">5</p>
                  <a href="/roles" className="btn btn-success btn-sm">
                    Manage Roles
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">System Settings</h5>
                  <p className="card-text text-muted">Customize configurations</p>
                  <a href="/settings" className="btn btn-secondary btn-sm">
                    Go to Settings
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Recent Activity */}
          <div className="mt-5">
            <h4>Recent Activity</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="bi bi-person-plus-fill text-success me-2"></i>
                Added new user: Vidit Sharma
              </li>
              <li className="list-group-item">
                <i className="bi bi-pencil-fill text-warning me-2"></i>
                Edited role: Admin
              </li>
              <li className="list-group-item">
                <i className="bi bi-trash-fill text-danger me-2"></i>
                Deleted user: Mukesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
