import LoginBoard from "../ui/layout/LoginBoard";

const login = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden w-1/2 items-center justify-center md:block">
        <img
          className="h-screen w-full object-cover shadow-2xl"
          alt="UI"
          src="/UILogin.png"
        ></img>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LoginBoard />
      </div>
    </div>
  );
};

export default login;
