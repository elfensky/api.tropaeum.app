import Image from 'next/image';
// import { LoginForm } from '@/components/auth/login.jsx';

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
                {/* <LoginForm /> */}
                This is a Landing Page <br />
                Login to Admin <br />
                Link to Docs
            </main>
        </div>
    );
}
