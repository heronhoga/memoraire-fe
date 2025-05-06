import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.BACKEND_PORT;
const APP_KEY = import.meta.env.APP_KEY;

interface MemoData {
  date: string;
  note: string;
}

interface DeleteMemoData {
  memo_id: string;
}

interface DeleteMemoResponse {
  message: string;
}

interface CreateMemoResponse {
  message: string;
}

interface UpdateMemoResponse {
  message: string;
}

interface GetMemoResponse {
  message: string;
  data: unknown;
}

//create memo
export async function createMemo(
  data: MemoData,
  token: string
): Promise<CreateMemoResponse> {
  try {
    const response = await axios.post(`${BASE_URL}/api/memo/create`, data, {
      headers: {
        hgtoken: APP_KEY,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}

//get memo
export async function getMemo(
  token: string,
  page: number
): Promise<GetMemoResponse> {
  try {
    const response = await axios.get(`${BASE_URL}/api/memo?page=${page}`, {
      headers: {
        hgtoken: APP_KEY,
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}

//update memo
export async function updateMemo(
  data: MemoData,
  token: string
): Promise<UpdateMemoResponse> {
  try {
    const response = await axios.put(`${BASE_URL}/api/memo`, data, {
      headers: {
        hgtoken: APP_KEY,
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}

//delete memo
export async function deleteMemo(
  data: DeleteMemoData,
  token: string
): Promise<DeleteMemoResponse> {
  try {
    const response = await axios.delete(`${BASE_URL}/api/memo`, {
      headers: {
        hgtoken: APP_KEY,
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    console.log(axiosError);
    throw axiosError.response?.data || { message: "Something went wrong" };
  }
}
