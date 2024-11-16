import { auth } from '@/auth';
//next
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//components
import Logout from '@/components/auth/Logout';

export default async function Navbar() {
    const session = await auth();

    return (
        <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
                Home
            </Link>

            <div className="flex items-center gap-4">
                <Link href="/middleware" className="text-2xl font-bold">
                    Middleware
                </Link>
                <Link href="/server" className="text-2xl font-bold">
                    Server
                </Link>
            </div>

            <div className="flex items-center gap-4">
                {!session?.user && (
                    // if user not logged in, show login/signup buttons
                    <>
                        <Link href="/login" className="text-2xl font-bold">
                            Login
                        </Link>
                        <Link href="/signup" className="text-2xl font-bold">
                            Signup
                        </Link>
                    </>
                )}

                {session?.user && (
                    // if user logged in, show user info and a logout button
                    <div className="flex items-center justify-center gap-4">
                        {session.user?.name}
                        {session.user?.image && (
                            <Image
                                src={
                                    session.user?.image ||
                                    '/default/profile.png'
                                }
                                alt="User Avatar / Profile image"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                        )}
                        <Logout />
                    </div>
                )}
            </div>
        </nav>
    );
}
