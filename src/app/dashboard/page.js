import LogOut from "../../components/LogOut";
import { auth } from "../../auth";
import Image from "next/image";
import { redirect } from "next/navigation";
const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-xl font-extrabold text-blue-600 mb-4">
            ✨ Welcome to Your Dashboard! ✨
          </h2>
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3">
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-md"
            />
          </div>
          <h3 className="text-center text-xl font-semibold text-gray-800 mb-2">
            Hello, {session?.user?.name}!
          </h3>
          <p className="text-center text-gray-600 text-sm mb-4">
            You've successfully logged in. Explore what's next!
          </p>
          <div className="space-y-3 w-full">
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
