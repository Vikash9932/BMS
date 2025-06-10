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

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/api/users/get-current-user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log('error in fetching user info', err);
    return err.response.data;
  }
};
