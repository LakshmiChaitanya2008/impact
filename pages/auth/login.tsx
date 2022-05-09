import Link from "next/link";

export default function Login() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form className="bg-[#131313] p-5 rounded-md lg:w-[25vw] w-[80vw]">
        <h1 className="text-2xl">Login to continue</h1>
        <input type="email" className="p-2 mt-6" placeholder="Email" />
        <input type="password" className="p-2 mt-3 " placeholder="Password" />
        <Link href="/auth/register">
          <span className="underline mb-3 mt-4 block cursor-pointer">
            Not a member? REGISTER
          </span>
        </Link>
        <button className="bg-gray px-8 py-2 text-lg rounded-md w-full mb-2">
          Login
        </button>
      </form>
    </div>
  );
}
