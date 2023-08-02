import Layout from "@/components/Layouts";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-white flex justify-between">
      <h2>
        Ola, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-blue-200 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} className="w-6 h-6"/>
        <span className="px-2">
          {session?.user?.name}
        </span>
        
      </div>
      
    </div>
   
    </Layout>
}
