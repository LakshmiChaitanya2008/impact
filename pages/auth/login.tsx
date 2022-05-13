import Link from "next/link";
import { auth, db } from "../../lib/firebase";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { currentUser } from "../../store/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthError, signInWithEmailAndPassword as signIn } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { loadavg } from "os";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useAtom(currentUser);
  const [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/app");
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleLogin = handleSubmit(async (e) => {
    try {
      const { user } = await signIn(auth, e.email, e.password);
      setUser(user!);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/app");
    } catch (error: AuthError | any) {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setError("User not found");
      } else {
        setError("Invalid email or password");
      }
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
