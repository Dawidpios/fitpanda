import { Label } from "@src/components/ui/label";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import AvatarHandler from "./AvatarHandler";
import { Toaster } from "react-hot-toast";

const UserPanel = ({ params }: { params: { id: string } }) => {
  const userID = params.id;
  return (
    <div className="mx-auto w-11/12 bg-white rounded-lg shadow-lg p-6">
      <div className="p-4 w-full flex flex-col gap-6 justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/4 p-2">
          <h2 className="text-xl font-bold">Change Password</h2>
          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                placeholder="Enter your current password"
                type="password"
              />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                placeholder="Enter your new password"
                type="password"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Confirm your new password"
                type="password"
              />
            </div>
            <Button className="w-40 rounded-xl bg-green text-white">
              Update Password
            </Button>
          </div>
        </div>
        <div className="w-full self-start lg:w-1/4 p-2">
          <h2 className="text-xl font-bold">Set Avatar</h2>
          <AvatarHandler id={userID} />
        </div>
        <div className="w-full self-start lg:w-1/4 p-2">
          <h2 className="text-xl font-bold">Login Details</h2>
          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                defaultValue="jaredpalmer"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                defaultValue="jared@example.com"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <Button className="w-40 rounded-xl bg-green text-white">
              Update Details
            </Button>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default UserPanel;
