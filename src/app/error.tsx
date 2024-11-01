'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[url('/images/error.jpeg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center flex-col gap-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Error
        </h1>
        <p className="mb-6 max-w-2xl text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          ¡Ups! Algo salió mal. Estamos trabajando para solucionar el problema.
          Por favor, vuelve a intentarlo más tarde.
        </p>
        <button
          onClick={() => reset()}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
