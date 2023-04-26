import { Form, Input, Button } from '..';
import { useFormik } from 'formik';
import useAuth from '../../hooks/useLogin';

const SignUpForm: React.FC = () => {
  const { onSignUp } = useAuth();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: values => onSignUp(values),
  });
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="username" value={values.username} onChange={handleChange} />
      <Input name="email" value={values.email} onChange={handleChange} />
      <Input name="password" value={values.password} onChange={handleChange} />
      <Button type='submit'>
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;