import axios from "axios";

const API_URL = "http://localhost:3001";

export const getUsers = async () => await axios.get(`${API_URL}/users`);
export const addUser = async (user) => await axios.post(`${API_URL}/users`, user);
export const updateUser = async (id, user) =>
  await axios.patch(`${API_URL}/users/${id}`, user);
export const deleteUser = async (id) => await axios.delete(`${API_URL}/users/${id}`);

export const getRoles = async () => await axios.get(`${API_URL}/roles`);
export const addRole = async (role) => await axios.post(`${API_URL}/roles`, role);
export const updateRole = async (id, role) =>
  await axios.patch(`${API_URL}/roles/${id}`);
export const deleteRole = async (id) => await axios.delete(`${API_URL}/roles/${id}`);
