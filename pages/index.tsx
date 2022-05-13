import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "next/app";
import { useEffect } from "react";
import { useAtom } from "jotai";
import Home from "../components/Home";
import { auth } from "../lib/firebase";
import { currentUser } from "../store/atoms";

const Main = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default Main;
