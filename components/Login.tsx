import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="/facebook.webp"
        alt="facebook logo"
        width={400}
        height={400}
        style={{ margin: '4rem' }}
      />
      <h1 onClick={() => signIn()} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
    </div>
  );
};

export default Login;
