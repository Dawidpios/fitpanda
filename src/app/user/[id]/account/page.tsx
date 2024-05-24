
import { AvatarImage, AvatarFallback } from "@component/components/ui/avatar"
import { CardTitle, CardHeader, CardContent, Card } from "@component/components/ui/card"
import Avatar from "@component/components/component/Avatar/Avatar"
import { Button } from "@component/components/ui/button"
import { getServerSession } from "next-auth"
import { options } from "@component/app/api/auth/[...nextauth]/options"

const UserAccount = async () => {
  const session = await getServerSession(options)
  console.log(session)

  
  const getUser = await fetch(`https://fitp-be.vercel.app/getUser?id=${session?.user.id}`)

  const {name, email, createdAt} = await getUser.json()
  const createdDate = new Date(createdAt).toLocaleDateString()
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-40 w-40 rounded-3xl"></Avatar>
            <div className="text-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-gray-500 dark:text-gray-400">{email}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="flex items-center gap-2">
                
                <div>
                  <p className="text-sm font-medium">Account Created</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{createdDate}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-medium">Total Purchases</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">42</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-medium">Active Subscriptions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Selected Product</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Product Image"
                  className="rounded-lg"
                  height={80}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div>
                  <h3 className="text-lg font-semibold">Premium Subscription</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Unlock all features and get unlimited access to our support team.
                  </p>
                </div>
              </div>
              <Button size="sm">View/Manage</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UserAccount