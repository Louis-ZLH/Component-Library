export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2">
      <div role="alert" className="flex flex-col items-center justify-center">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button
          className="mt-5 h-12 w-32 cursor-pointer rounded-full bg-gray-400"
          onClick={resetErrorBoundary}
        >
          Back
        </button>
      </div>
    </div>
  );
}
