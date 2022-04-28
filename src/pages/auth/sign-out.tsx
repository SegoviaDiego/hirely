import { useEffect, useState } from 'react';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { UnAuthenticatedMain } from '@/templates/UnAuthenticatedMain';

const SignOut = () => {
  const router = useRouter();

  const [counter, setCounter] = useState(5);

  const signOutFromApp = () => signOut({ callbackUrl: '/auth/sign-in/' });

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter === 0) signOutFromApp();
  }, [counter, router]);

  return (
    <UnAuthenticatedMain
      meta={<Meta title="Hirely" description="Your hiring buddy." />}
    >
      <div className="flex h-screen items-center justify-center">
        <div className="p-10">
          <div className="w-full rounded-lg border bg-white p-4 text-center shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              You have signed out!
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
              Redirecting in {counter} seconds
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={signOutFromApp}
              >
                Go to Sign-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </UnAuthenticatedMain>
  );
};

export default SignOut;
