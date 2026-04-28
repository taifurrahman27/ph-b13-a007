import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-20">404 - Page Not Found</h1>
            <p className="text-center mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
            <div className="text-center my-6">
                <Link href="/" className="text-blue-500 text-xl font-semibold hover:underline">Go back to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;