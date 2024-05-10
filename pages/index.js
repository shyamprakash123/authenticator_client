import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
    return (
        <div>
            <Head>
                <title>Welcome to Client Site</title>
                <meta name="description" content="Welcome to Client Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Client Site</h2>
                    </div>
                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">Log in to access your account</p>
                    </div>
                    <div className="text-center p-3 bg-slate-200 w-2/3 mx-auto rounded hover:cursor-pointer">
                        <Link href="/login">
                            Continue to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
