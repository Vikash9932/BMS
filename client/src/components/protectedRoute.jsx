import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from '../apicalls/users';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, showLoader } from '../redux/loaderSlice';
import { setUser } from '../redux/userSlice';

const ProtectedRoute = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const getValidUserDetails = useCallback(async () => {
    try {
      dispatch(showLoader());
      const response = await GetCurrentUser();
      dispatch(hideLoader());
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        dispatch(setUser(null));
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: e.message,
      });
      dispatch(hideLoader());
      dispatch(setUser(null));
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [messageApi, dispatch, navigate]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getValidUserDetails();
    } else {
      navigate('/login');
    }
  }, [navigate, getValidUserDetails]);

  console.log('user', user);
  return (
    <div>
      {contextHolder}
      {children}
    </div>
  );
};

export default ProtectedRoute;
