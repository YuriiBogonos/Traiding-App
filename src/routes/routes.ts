import CheckEmailPasswordCode from '@/pages/CheckEmailPasswordCode/CheckEmailPasswordCode.tsx';
import ConfirmPasswordReset from '@/pages/ConfirmPasswordReset/ConfirmPasswordReset.tsx';
import Dashboard from '@/pages/Dashboard/Dashboard.tsx';
import Home from '@/pages/Home/Home.tsx';
import NewTradePosition from '@/pages/NewTradePosition/NewTradePosition.tsx';
import PasswordResetEmail from '@/pages/PasswordResetEmail/PasswordResetEmail.tsx';
import Rules from '@/pages/Rules/Rules.tsx';
import SecondStepVerification from '@/pages/SecondStepVerification/SecondStepVerification.tsx';
import SingIn from '@/pages/SignIn/SingIn.tsx';
import SignUp from '@/pages/SignUp/SignUp.tsx';
import VerifyEmail from '@/pages/VerifyEmail/VerifyEmail.tsx';
import { IRoute } from '@/types/types.ts';

import ActionHandler from '../ActionHandler/ActionHandler.tsx';

const routes: IRoute[] = [
  {
    key: 'login',
    title: 'Login',
    path: '/login',
    component: SingIn,
  },
  {
    key: 'verify-email',
    title: 'Verify',
    path: '/verify-email',
    component: VerifyEmail,
  },
  {
    key: 'signup',
    title: 'SignUp',
    path: '/signup',
    component: SignUp,
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    key: 'home',
    title: 'Home',
    path: '/home',
    component: Home,
  },
  {
    key: 'reset/email-validation',
    title: 'ResetByEmail',
    path: '/reset/email-validation',
    component: PasswordResetEmail,
  },
  {
    key: 'reset',
    title: 'Reset Password',
    path: '/reset',
    component: ConfirmPasswordReset,
  },
  {
    key: 'action',
    title: 'action',
    path: 'action',
    component: ActionHandler,
  },
  {
    key: 'code',
    title: 'code',
    path: '/reset/code',
    component: CheckEmailPasswordCode,
  },
  {
    key: 'faq',
    title: 'FAq',
    path: 'faq',
    component: Rules,
  },
  {
    key: 'email-message',
    title: 'EmailMessage',
    path: '/email-message',
    component: SecondStepVerification,
  },
  {
    key: 'new-position',
    title: 'New Trade Position',
    path: '/new-position',
    component: NewTradePosition,
  },
];

export default routes;
