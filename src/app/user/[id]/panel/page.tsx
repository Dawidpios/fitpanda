import AvatarHandler from "./AvatarHandler";
import { Toaster } from "react-hot-toast";
import PasswordHandler from "./PasswordHandler";

const UserPanel = ({ params }: { params: { id: string } }) => {
  const userID = params.id;
  return (
    <div className="mx-auto w-11/12 lg:w-1/2 bg-white m-2 rounded-lg shadow-lg p-4">
      <div className="p-4 w-full flex flex-col gap-6 justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2 p-2">
          <h2 className="text-xl font-bold text-black">Change Password</h2>
          <PasswordHandler id={userID} />
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
