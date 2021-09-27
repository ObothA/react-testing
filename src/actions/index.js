import axios from 'axios';

export const getSecretWord = async () => {
  // TODO: write actual action in Redux / context
  const response = await axios.get("http://localhost:3030")
  return response.data;
};