import Head from 'next/head';

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Welcome to your dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to your Dashboard</h2>
                    </div>
                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">Explore the features and manage your account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
