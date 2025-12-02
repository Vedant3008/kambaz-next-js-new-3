import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_REMOTE_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${courseId}`);
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}`);
  return response.data;
};

export const checkEnrollment = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${courseId}/check`);
  return response.data;
};