
// import popins font
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/loginButton";


// generate the font
const font = Poppins({ subsets: ["latin"], weight:['600'] });

export default function Home() {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="space-y-6">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>🔑 Auth</h1>
      <p className="text-white text-lg text-center">
        a simple app to test the auth flow
      </p>
      <div className="flex flex-col items-center justify-center space-y-4">
        <LoginButton mode="redirect">
        <Button variant="secondary" size="lg" >
          SignIn
        </Button>
        </LoginButton>
      </div>
    </div>
   </main>
  );
}
