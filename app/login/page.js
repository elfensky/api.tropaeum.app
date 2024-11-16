import React from 'react';
import LoginWithCredentials from '@/components/auth/LoginWithCredentials.jsx';
import LoginWithGithub from '@/components/auth/LoginWithGithub.jsx';

export default function Login() {
    return (
        <div className="flex flex-col gap-4 bg-slate-600 p-4">
            <form className="flex flex-col gap-4 bg-red-500 p-4">
                <input type="text" />
                <input type="password" />
                <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white"
                >
                    Login
                </button>
            </form>
            <LoginWithGithub />
        </div>
    );
}
