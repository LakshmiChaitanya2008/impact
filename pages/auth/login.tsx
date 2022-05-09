import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { useForm } from "react-hook-form";
import { useSetAtom } from "jotai";
import { currentUser } from "../../jotai/atoms";
import { useRouter } from "next/router";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const setUser = useSetAtom(currentUser);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleLogin = handleSubmit(async (e) => {
    const { error, user } = await supabase.auth.signIn({
      email: e.email,
      password: e.password,
    });

    if (!error) {
      setUser(user!);
      router.push("/app");
    }

    if (error) {
      setError(error.message);
    }
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form
        className="bg-[#131313] p-5 rounded-md lg:w-[25vw] w-[80vw]"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl">Login to continue</h1>
        <input
          type="email"
          className="p-2 mt-6"
          placeholder="Email"
          required
          {...register("email", {
            required: true,
          })}
        />
        <input
          type="password"
          className="p-2 mt-3 "
          placeholder="Password"
          required
          {...register("password", {
            required: true,
          })}
        />
        <Link href="/auth/register">
          <span className="underline mb-3 mt-4 block cursor-pointer">
            Not a member? REGISTER
          </span>
        </Link>

        <span className="text-red-500 mb-3 mt-4 block">{error}</span>
        <button className="bg-gray px-8 py-2 text-lg rounded-md w-full mb-2">
          Login
        </button>
      </form>
    </div>
  );
}
