import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import appImagen from '@/public/assets/images/imagenIngreso.png';
import appLogo from '@/public/assets/images/logo.png';
import { UnAuthenticatedMain } from '@/templates/UnAuthenticatedMain';

const SignUp = () => {
  const router = useRouter();

  const signUpForm = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const signUpResult = await fetch('/api/auth/sign-up', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (signUpResult) {
      const signInResult: any = await signIn('credentials', {
        email: event.target.email.value,
        password: event.target.password.value,
        redirect: false,
      });

      if (signInResult && signInResult.ok) {
        await router.push('/');
      }
    }
  };

  return (
    <UnAuthenticatedMain
      meta={<Meta title="Hirely" description="Your hiring buddy." />}
    >
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2">
          <div className="w-full">
            <div>
              <Image src={appLogo} alt="Hirely" />
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
                Crea una cuenta nueva
              </h1>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={signUpForm}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Link href="/auth/sign-in">
                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                          ¿Ya tienes una cuenta?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={appImagen}
            alt="Hirely"
          />
        </div>
      </div>
    </UnAuthenticatedMain>
  );
};

export default SignUp;
