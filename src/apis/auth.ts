import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.PUBLIC_BACKEND_PORT;
const APP_KEY = import.meta.env.PUBLIC_APP_KEY;

interface RegisterData {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface RegisterResponse {
  message: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
}

interface LogoutResponse {
  message: string;
}

export async function registerUser(
  data: RegisterData
): Promise<RegisterResponse> {
  try {
    console.log("app token: ", APP_KEY);
    const response = await axios.post(`${BASE_URL}/api/register`, data, {
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

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, data, {
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

export async function logoutUser(auth: string): Promise<LogoutResponse> {
  try {
    const response = await axios.get(`${BASE_URL}/api/logout`, {
      headers: {
        hgtoken: APP_KEY,
        Authorization: `Bearer ${auth}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}
