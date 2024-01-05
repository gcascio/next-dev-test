'use client'

import { signIn } from 'next-auth/react';

export const LoginButton = () => <button type="button" onClick={() => signIn()}>Sign in</button>;