import Layout from "@/components/Layouts";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-gray-900 flex justify-between">
        <h2>
          Ola, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-blue-200 gap-1 text-black rounded-lg overflow-hidden">
          {/* <img src={session?.user?.image} className="w-6 h-6" /> */}
          <Image
            src={session?.user?.image}
            width={20}
            className="rounded-lg"
            height={20}
            alt="Picture of the author"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
