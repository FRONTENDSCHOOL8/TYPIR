import React from 'react';
import Logo from '@/atoms/Logo/Logo';
import SignInSignUpLinks from '@/atoms/SignInSignUpLinks/SignInSignUpLinks';
import { getStaticImage } from '@/utils';

const Splash = () => {
  return (
    <div
      className="min-w-[360px] max-w-[768px] h-screen flex flex-col items-center px-15 py-0 m-auto relative"
      style={{
        backgroundImage: `url('${getStaticImage('splash_bg.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full h-full">
        <div className="absolute top-[90px] left-[34px] md:top-[120px] md:left-[50px]">
          <Logo size="w-[200px] xs:w-[250px]" color="white" />
          <div className="text-white mt-4 ml-3 mobile:text-[24px] xs:text-[28px] font-serif">
            <p>Turn</p>
            <p>Your Pinterest</p>
            <p>Into</p>
            <p>Reality</p>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center mx-15px">
          <SignInSignUpLinks text="로그인" />
          <SignInSignUpLinks text="회원가입" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
