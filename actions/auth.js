'use server';
// auth server action

import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

// SOCIAL OAUTH PROVIDER
export const login = async (provider) => {
    await signIn(provider, { redirectTo: '/' });
    revalidatePath('/');
};

// LOGOUT
export const logout = async () => {
    await signOut({ redirectTo: '/' });
    revalidatePath('/');
};
