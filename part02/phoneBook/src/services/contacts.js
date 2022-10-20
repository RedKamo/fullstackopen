import axios from "axios";
//const baseUrl = "http://localhost:3001/api/persons";
//add new base url part03 backend
const baseUrl = "/api/persons";

const getContacts = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const createContact = async (newContact) => {
  const request = axios.post(baseUrl, newContact);
  const response = await request;
  return response.data;
};

const updateContact = async (id, newContact) => {
  const request = axios.put(`${baseUrl}/${id}`, newContact);
  const response = await request;
  return response.data;
};

const deleteContact = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

const exportServices = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};

export default exportServices;
