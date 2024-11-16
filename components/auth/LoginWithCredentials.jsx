'use client';

export function LoginWithCredentials() {
    return (
        <form className="flex flex-col gap-4 bg-slate-600">
            <input type="text" />
            <input type="password" />
            <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white"
            >
                Login
            </button>
        </form>
    );
}
