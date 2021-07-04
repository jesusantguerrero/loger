import { SignIn } from "@clerk/clerk-react";
import Head from "next/head";
export default function SignInPage() {
  return (
  <>
    <Head>
      <title>Loger</title>
    </Head>
    <SignIn 
      path="/sign-in" 
      routing="path" 
      signUpURL="/sign-up"
    >
      <h1>Hola</h1>
    </SignIn>
  </>);
}