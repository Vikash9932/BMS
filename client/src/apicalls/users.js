import { axiosInstance } from '.';

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/users/register', payload);
    return response.data;
  } catch (err) {
    console.log('error in registering', err);
    return err.response.data;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/users/login', payload);
    return response.data;
  } catch (err) {
    console.log('error in login', err);
    return err.response.data;
  }
};
