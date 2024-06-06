import Avatar from "@src/components/component/Avatar/Avatar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgressTracker } from "@src/components/component/user/account/ProgressTracker";

const UserAccount = async ({ params }: { params: { id: string } }) => {
  const getUser = await fetch(
    `https://fitp-be.vercel.app/getUser?id=${params.id}`,
    { cache: "no-cache", next: { tags: ["userParams"] } }
  );

  const user = await getUser.json();

  if (getUser.status !== 200) {
    notFound();
  }

  const { id, name, email, createdAt, stats } = user;

  console.log(stats);
  const createdDate = new Date(createdAt).toLocaleDateString();
  return (
    <div className="container mx-auto px-4 py-4 md:py-8 lg:py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center gap-4">
            <Avatar className=" h-16 w-16"></Avatar>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{name}</h1>
              <p className="text-gray-500 text-white">{email}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-full">
                  <p className="text-sm font-medium text-black text-center">
                    Account Created
                  </p>
                  <p className="text-sm text-gray-500 text-black text-center">
                    {createdDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-full">
                  <p className="text-sm font-medium text-black text-center">
                    Weight progress
                  </p>
                  <p className="text-sm text-gray-500 text-black text-center">
                    {`${stats.weight.value} kg` || "Weight is not setted yet"}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-green p-4 shadow-sm">
              <div className="flex items-center h-full align-middle justify-center">
                <Link
                  className="text-center align-middle rounded-xl bg-green text-white uppercase"
                  href={`/user/${id}/account/updateUserParams`}
                >
                  Update your parameters
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <ProgressTracker stats={stats}></ProgressTracker>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
