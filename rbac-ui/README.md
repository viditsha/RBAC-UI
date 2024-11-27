Role-Based Access Control (RBAC) UI
Overview
This project implements a simple Role-Based Access Control (RBAC) User Interface, where users can be managed, roles can be assigned, and permissions can be defined. It is designed to help administrators manage users and roles efficiently, providing an intuitive way to view, add, edit, and delete users and roles, as well as assign permissions dynamically.

Features-------
User Management:
View and manage users.
Add, edit, or delete users.
Assign roles and toggle user status (Active/Inactive).

Role Management:------------
Create and manage roles.
Assign permissions dynamically (e.g., Read, Write, Delete).
Edit and delete roles.

Permissions:---------------
Permissions can be added to roles dynamically.
Permissions are displayed clearly for easy understanding and modification.

Frontend: React.js
Styling: Bootstrap
State Management: React useState hook

rbac-ui/
├── src/
│   ├── components/           # Reusable UI components (like InputField, Table, etc.)
│   ├── pages/                # Main pages (UserPage.js, RolesPage.js)
│   ├── App.js                # Main application file
│   ├── index.js              # Entry point for React
│   └── styles/               # CSS styles
│       ├── Dashboard.css     # Dashboard specific styles
│       ├── UsersPage.css     # Users Page specific styles
│       └── RolesPage.css     # Roles Page specific styles
├── public/
│   └── index.html            # The HTML file that includes the React app
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation (this file)
