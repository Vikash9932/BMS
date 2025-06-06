import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <header className='App-header'>
        <main className='main-area mw-500 text-center px-3'>
          <section className='left-section'>
            <h1>Register to BMS</h1>
          </section>

          <section className='right-section'>
            <Form layout='vertical'>
              <Form.Item
                label='Name'
                htmlFor='Name'
                name='Name'
                className='d-block'
                rules={[{ required: true, message: 'Name is required' }]}>
                <Input
                  id='Name'
                  type='Name'
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
