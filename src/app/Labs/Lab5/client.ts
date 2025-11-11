import axios from "axios";
const REMOTE_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};
