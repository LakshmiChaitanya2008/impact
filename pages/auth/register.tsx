import Link from "next/link";

export default function Register() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form className="bg-[#131313] p-5 rounded-md lg:w-[25vw] w-[80vw]">
        <h1 className="text-2xl">Create an account</h1>
        <input
          type="text"
          className="bg-base border-primary border-2 p-2 mt-6 w-full"
          placeholder="Username"
        />
        <input
          type="email"
          className="bg-base border-primary border-2 p-2 mt-3 w-full"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-base border-primary border-2 p-2 mt-3 w-full"
          placeholder="Password"
        />
        <Link href="/auth/login">
          <span className="underline mb-3 mt-4 block cursor-pointer">
            Already a member? LOGIN
          </span>
        </Link>
        <button className="bg-gray px-8 py-2 text-lg rounded-md w-full mb-2">
          Register
        </button>
      </form>
    </div>
  );
}
