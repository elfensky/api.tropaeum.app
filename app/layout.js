//auth
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
//nextjs
import Image from 'next/image';
//components
import Navbar from '@/components/NavBar';
//blabla
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata = {
    title: 'Tropaeum API',
    description: 'A trophies API',
};

export default async function RootLayout({ children }) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <html
                lang="en"
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <body className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex grow items-center justify-center bg-lime-700 ">
                        {children}
                    </main>
                    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/file.svg"
                                alt="File icon"
                                width={16}
                                height={16}
                            />
                            Learn
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/window.svg"
                                alt="Window icon"
                                width={16}
                                height={16}
                            />
                            Examples
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/globe.svg"
                                alt="Globe icon"
                                width={16}
                                height={16}
                            />
                            Go to nextjs.org →
                        </a>
                    </footer>
                </body>
            </html>
        </SessionProvider>
    );
}
