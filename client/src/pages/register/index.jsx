import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/users';

const Register = () => {
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    console.log('finish', values);
    try {
      const response = await RegisterUser(values);
      console.log('response UI', response);
      if (response && response.success) {
        message.success(response.message);
        navigate('/login');
      } else {
        message.error(response?.message);
      }
    } catch (error) {
      message.error(error);
      console.log('error', error);
    }
  };

  return (
    <div>
      <header className='App-header'>
        <main className='main-area mw-500 text-center px-3'>
          <section className='left-section'>
            <h1>Register to BMS</h1>
          </section>

          <section className='right-section'>
            <Form layout='vertical' onFinish={handleFinish}>
              <Form.Item
                label='Name'
                htmlFor='name'
                name='name'
                className='d-block'
                rules={[{ required: true, message: 'Name is required' }]}>
                <Input
                  id='name'
                  type='text'
                  placeholder='Enter your Name'></Input>
              </Form.Item>

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
                  Register
                </Button>
              </Form.Item>
            </Form>

            <div>
              <p>
                Already a User? <Link to='/login'>Log In</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
};

export default Register;
