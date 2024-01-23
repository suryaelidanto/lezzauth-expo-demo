import { LezzAuthProvider } from 'lezzauth/expo';
import { Routes } from './Routes';

export default function App() {
  return (
    <LezzAuthProvider publishableKey={process.env.EXPO_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY!}>
      <Routes />
    </LezzAuthProvider>
  );
};