'use client';
import { logout } from '@/actions/auth';

export default function Logout() {
    return (
        <button
            onClick={() => logout()}
            className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white"
        >
            Logout
        </button>
    );
}
