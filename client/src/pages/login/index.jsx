import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../apicalls/users';

const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response && response.success) {
        navigate('/');
      }
      messageApi.open({
        type: response.success ? 'success' : 'error',
        content: response.message,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {contextHolder}
      <header className='App-header'>
        <main className='main-area mw-500 text-center px-3'>
          <section className='left-section'>
            <h1>Login to BMS</h1>
          </section>

          <section className='right-section'>
            <Form layout='vertical' onFinish={handleFinish}>
              <Form.Item
                label='Email'
                htmlFor='email'
                name='email'
                className='d-block'
                rules={[{ required: true, message: 'email is required' }]}>
                <Input
                  id='email'
                  type='text'
                  placeholder='Enter your email'></Input>
              </Form.Item>

              <Form.Item
                label='Password'
                htmlFor='password'
                name='password'
                className='d-block'
                rules={[{ required: true, message: 'password is required' }]}>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'></Input>
              </Form.Item>

              <Form.Item className='d-block'>
                <Button
                  type='primary'
                  block
                  htmlType='submit'
                  style={{ fontsize: '1rem', fontWeight: '600' }}>
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div>
              <p>
                New User? <Link to='/register'>Register</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
};

export default Login;
