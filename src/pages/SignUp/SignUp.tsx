import SharedLayout from '@/components/AuthLayout/AuthLayout.tsx';
import SignupForm from '@/components/SignUpForm/SignUpForm.tsx';

import './SignUp.scss';

const SignupPage = () => {
  return (
    <SharedLayout>
      <SignupForm />
    </SharedLayout>
  );
};

export default SignupPage;
