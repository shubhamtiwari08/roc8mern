"use client" 

import { api } from "~/trpc/react";
import SignupForm from "./_components/SignUpForm";

export default function Home() {

  
const signupCall = api.post.signup.useMutation();

const handleMutate = () =>{
  signupCall.mutate({
    name: "shubham wangdu",
    email: "st11@gmail.com",
    password: "12341234",
  })
}

  

  return (
    <main className="bg-white">
      <SignupForm fun={handleMutate} />
    </main>
  );
}
