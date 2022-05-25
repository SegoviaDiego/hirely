import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import appImagen from '@/public/assets/images/imagenIngreso.png';
import appLogo from '@/public/assets/images/logo.png';
import { UnAuthenticatedMain } from '@/templates/UnAuthenticatedMain';

export default function SignIn() {
  const router = useRouter();

  const signInForm = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const res: any = await signIn('credentials', {
      email: event.target.email.value,
      password: event.target.password.value,
      redirect: false,
    });

    if (res && res.ok) {
      await router.push('/');
    }

    // @TODO: Handle invalid credentials.
  };

  return (
    <UnAuthenticatedMain
      meta={<Meta title="Hirely" description="Your hiring buddy." />}
    >
      <div className="flex h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2">
          <div className="w-full">
            <div>
              <Image src={appLogo} alt="Hirely" />
              <h1 className="mt-6 text-5xl font-extrabold text-gray-900">
                Ingresa
              </h1>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                con tu cuenta
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={signInForm}
                >
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
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Recuerdame
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link href="#">
                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-0 flex-1">
          <div>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={appImagen}
              alt="Hirely"
            />
          </div>
        </div>
      </div>
    </UnAuthenticatedMain>
  );
}
