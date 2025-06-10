import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from '../apicalls/users';
import { message } from 'antd';

const ProtectedRoute = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const getValidUserDetails = useCallback(async () => {
    try {
      await GetCurrentUser();
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: e.message,
      });
    }
  }, [messageApi]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getValidUserDetails();
    } else {
      navigate('/login');
    }
  }, [navigate, getValidUserDetails]);

  return (
    <div>
      {contextHolder}
      {children}
    </div>
  );
};

export default ProtectedRoute;
