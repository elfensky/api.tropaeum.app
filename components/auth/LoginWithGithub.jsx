'use client';
import React from 'react';
import { login } from '@/actions/auth';

export default function LoginWithGithub() {
    return (
        <div
            onClick={() => login('github')}
            className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white"
        >
            Login with Github
        </div>
    );
}
