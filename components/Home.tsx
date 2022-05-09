import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between my-0 mx-auto max-w-4xl mt-10">
        <h1 className="text-4xl">Impact</h1>
        <div>
          <Link href={"/auth/login"}>
            <button className="border-2 border-primary px-8 py-2 mx-3 text-lg rounded-md">
              Login
            </button>
          </Link>
          <Link href={"/auth/register"}>
            <button className="bg-primary px-8 py-2 text-lg rounded-md">
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-14 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 ">
          Never Forget Anything!
        </h1>
        <p className="text-2xl mt-6">
          Use Impact to note imporant things securely and easily
        </p>

        <Image src="/assets/illustration.svg" height={500} width={500} />
      </div>
    </>
  );
}
