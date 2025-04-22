import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.BACKEND_PORT;
const APP_KEY = import.meta.env.APP_KEY;

interface RegisterData {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface RegisterResponse {
  message: string;
}

export async function registerUser(data: RegisterData): Promise<RegisterResponse> {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data, {
      headers: {
        hgtoken: APP_KEY,
      },
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}
