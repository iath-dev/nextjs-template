export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-900 dark:to-white">
          Loading...
        </span>
      </div>
    </div>
  );
}
