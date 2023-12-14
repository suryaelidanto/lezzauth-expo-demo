import { LezzAuthProvider } from 'lezzauth/expo';
import React from 'react';
import { Routes } from './Routes';

export default function App() {
  return (
    <LezzAuthProvider publishableKey={process.env.EXPO_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY!}>
      <Routes />
    </LezzAuthProvider>
  );
};
