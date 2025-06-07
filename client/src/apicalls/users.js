import { axiosInstance } from '.';

export const RegisterUser = async (payload) => {
  console.log('payload', payload);
  try {
    const response = await axiosInstance.post('/api/users/register', payload);
    console.log('response', response);

    return response.data;
  } catch (err) {
    console.log('error in registering', err);
  }
};

export const LoginUser = async (payload) => {
  console.log('payload', payload);
  try {
    const response = await axiosInstance.post('/api/users/login', payload);
    console.log('response', response);

    return response.data;
  } catch (err) {
    console.log('error in login', err);
  }
};
