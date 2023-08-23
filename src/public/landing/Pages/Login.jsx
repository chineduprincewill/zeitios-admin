import React from "react";
import LoginBox from "../Components/login/login-box";

const Login = () => {
  return (
    <div className="text-black px-12 py-12 w-[100%] h-[100vh] bg-[url('/regBg.png')]">
      <div className="flex shadow w-[90%] ml-[5%] h-full">
        <div className="w-[0%] md:w-[50%] relative">
          <div className="absolute bg-[#0259DB] w-[100%] h-[100%] opacity-50"></div>
          <div className="absolute text-white font-bold left-8 top-8 hidden md:block">
            zietios
          </div>
          <img src="/hand.png" alt="hand" className="w-[100%] h-[100%]" />
        </div>
        <div className="w-[100%] ml-[0%] sm:w-[70%] sm:ml-[15%] md:ml-[0%] md:w-[50%]  bg-white py-8">
          <div className="text-2xl font-bold  w-[100%] flex flex-col items-center">
            Login
          </div>
          <div className="w-[100%] flex flex-col items-center">
            Kindly fill in your details
          </div>
          <LoginBox />
        </div>
      </div>
    </div>
  );
};

export default Login;
