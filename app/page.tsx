import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg flex justify-center w-screen h-screen items-center flex-col">
      Todo Application 
      <Link className="text-md p-3 border " href="/signin">Sign in</Link>
      <Link className="text-md p-3 border " href="/signup">Sign up</Link>
    </div>
  );
}
