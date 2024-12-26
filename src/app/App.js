import React from 'react';
import './App.css';

export const App = () => {
  return (
       <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-black bg-opacity-50 flex justify-center items-center shadow-lg" style={{ backgroundImage: "url('/images/image.png')" }}>
      

      <div className="absolute w-[400px] h-[400px] bg-[#c4c4c4] bg-opacity-10 border-[37px] border-t-[#00000045] border-l-[#00000045] border-r-[#00000045] border-b-[#00000045] rounded-full top-[20%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
      <div className="w-[681px] h-[543px] bg-white bg-opacity-20 opacity-90 rounded-[50px] shadow-lg p-5 flex flex-col justify-start items-center gap-5">
      <div className="text-white text-center mt-12 text-5xl font-semibold leading-[60.95px] tracking-wide">
      <span>L</span>
       <span>O</span>
      <span>G</span>
    <span>I</span>
      <span>N</span>
     </div>


        <form className="w-full">
          <div className="w-full mb-5">
            <input
              type="email"
              id="email"
              className="w-[572.6px] h-[53.79px] bg-white bg-opacity-20 text-white p-2 border border-black border-opacity-40 outline-none mt-5 ml-5"
              placeholder="Username"
              required
            />
          </div>

          <div className="w-full mb-5">
            <input
              type="password"
              id="password"
              className="w-[572.6px] h-[53.79px] bg-white bg-opacity-20 text-white p-2 border border-black border-opacity-40 outline-none mt-5 ml-5"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="w-[302px] h-[55px] bg-[#111212] bg-opacity-62 text-white flex justify-center items-center text-xl font-normal tracking-wide mt-12 border border-black cursor-pointer opacity-80 hover:opacity-100 transition-opacity ml-5">
            LOGIN
          </button>
        </form>
        
        <div className="absolute top-[470px] left-[55%] flex flex-col items-end gap-2 mt-20">
          <p className="text-white text-opacity-70 text-xl">Forgot password?</p>
          <p className="text-white text-opacity-70 text-xl text-right mr-3 ml-[-50px]">
            <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};
