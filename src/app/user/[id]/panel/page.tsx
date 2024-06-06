import { Label } from "@src/components/ui/label";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import AvatarHandler from "./AvatarHandler";
import { Toaster } from "react-hot-toast";

const UserPanel = ({ params }: { params: { id: string } }) => {
  const userID = params.id;
  return (
    <div className="mx-auto w-11/12 lg:w-1/2 bg-white m-2 rounded-lg shadow-lg p-4">
      <div className="p-4 w-full flex flex-col gap-6 justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2 p-2">
          <h2 className="text-xl font-bold text-black">Change Password</h2>
          <div className="mt-4 space-y-4 text-black">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                placeholder="Enter your current password"
                type="password"
              />
            </div>
            <div>
              <Label className="text-black" htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                placeholder="Enter your new password"
                type="password"
              />
            </div>
            <div>
              <Label className="text-black" htmlFor="confirm-password">Confirm Password</Label>
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
        <div className="w-full self-start lg:w-1/2 p-2">
          <h2 className="text-xl font-bold text-black">Set Avatar</h2>
          <AvatarHandler id={userID} />
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default UserPanel;
