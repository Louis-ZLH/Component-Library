import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div>
        <img className="w-72" src="/404.png" alt="page not found" />
      </div>
      <Link to={-1}>
        <span className="text-3xl text-purple-300 hover:underline">
          &larr; Go Back
        </span>
      </Link>
    </div>
  );
};

export default Error;
