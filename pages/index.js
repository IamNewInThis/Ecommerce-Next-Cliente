import Layout from "@/components/Layout";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log({session}) 
  if (session) {
    <div className='text-blue-900 flex justify-between'>
      <div className="text-center w-full">
        <button className="bg-white p-2 px-4" onClick={()=>signIn('google')}>

        </button>
      </div>
    </div>
  };

  return (
    <Layout>
      <div className='text-blue-900 flex justify-between'>
        <h2>
          Bienvenido, <b>{session?.user.name} </b>
        </h2>
        <div className='flex bg-gray-300 gap-1 text-black rounded-lg'>
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className='px-2'>
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
