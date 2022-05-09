import { useSetAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { currentUser } from "../../jotai/atoms";
import { supabase } from "../../lib/supabase";

type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function Register() {
  const [error, setError] = useState("");

  const setUser = useSetAtom(currentUser);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister = handleSubmit(async (e) => {
    const { error, user } = await supabase.auth.signUp({
      email: e.email,
      password: e.password,
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      setUser(user!);
      router.push("/app");
    }
  });

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onSubmit={handleRegister}
    >
      <form className="bg-[#131313] p-5 rounded-md lg:w-[25vw] w-[80vw]">
        <h1 className="text-2xl">Create an account</h1>
        <input
          type="text"
          className="p-2 mt-6"
          placeholder="Username"
          {...register("username")}
          required
        />
        <input
          type="email"
          className="p-2 mt-3"
          placeholder="Email"
          {...register("email")}
          required
        />
        <input
          type="password"
          className="p-2 mt-3 "
          placeholder="Password"
          {...register("password")}
          required
        />
        <Link href="/auth/login">
          <span className="underline mb-3 mt-4 block cursor-pointer">
            Already a member? LOGIN
          </span>
        </Link>
        <span className="text-red-500 mb-3 mt-4 block">{error}</span>
        <button className="bg-gray px-8 py-2 text-lg rounded-md w-full mb-2">
          Register
        </button>
      </form>
    </div>
  );
}
