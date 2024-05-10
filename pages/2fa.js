import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const TwoFactorAuth = () => {
    const [code, setCode] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/2fa', { code });
            if (response.data.success) {
                // Redirect user to dashboard or another authenticated page
                router.push(response.data.redirect);
            } else {
                console.error('2FA failed:', response.data.message);
            }
        } catch (error) {
            console.error('2FA failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Two-Factor Authentication</h2>

                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-3">
                        <h2 className='text-center text-md text-gray-400'>Enter verification code received in your My Authenticator App</h2>
                        <div>

                            <label htmlFor="code" className="sr-only">Code</label>
                            <input id="code" name="code" type="text" autoComplete="code" required className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter code" value={code} onChange={(e) => setCode(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TwoFactorAuth;
