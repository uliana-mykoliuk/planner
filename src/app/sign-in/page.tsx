"use client";
import "./page.css";

import SignInForm from "@/components/sign-in-form/sign-in-form.component";
import SignUpForm from "@/components/sign-up-form/sign-up-form.component";
import Image from "next/image";
import { useState } from "react";

import SignInImg from "@/assets/sign-in.png";
import Link from "next/link";

export default function SignIn() {
  const [authType, setAuthType] = useState("sign in");

  const handleChangeAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <>
      <div className="sign-in-bg h-screen">
        <div className="h-full card flex items-center justify-center">
          <div className="bg-white p-[50px] rounded-[20px] max-w-[980px] w-full grid grid-cols-2 gap-x-[30px] min-h-[85%]">
            <div>
              <Link href="/" className="text-[#6A5ACD]">
                &larr; Back
              </Link>
              <Image
                alt="sign in image"
                src={SignInImg}
                className="self-center"
              />
            </div>
            {authType === "sign in" ? (
              <SignInForm
                changeAuthType={() => handleChangeAuthType("sign up")}
              />
            ) : (
              <SignUpForm
                changeAuthType={() => handleChangeAuthType("sign in")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
