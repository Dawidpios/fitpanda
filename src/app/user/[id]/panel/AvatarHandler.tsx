"use client";

import Avatar from "@src/components/component/Avatar/Avatar";
import revalidateT from "@src/action/revalidate";
import { storage } from "@src/utils/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { v4 } from "uuid";

const AvatarHandler = ({ id }: { id: string }) => {
  const { data: session, update } = useSession();
  const img = session?.user?.image
  
  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    clearAvatar();
    if (image) {
      updateUserAvatar(image);
    }
  };

  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };

  const clearAvatar = async () => {
    const avatar = ref(storage, `/users/${id}/`);

    const userStorage = await listAll(avatar);

    await deleteObject(userStorage.items[0]);
  };

  const updateUserAvatar = async (file: Blob | Uint8Array | ArrayBuffer) => {
    if (!file) return;
    const imageId = v4();
    const imageRef = ref(storage, `/users/${id}/` + imageId);
    await uploadBytes(imageRef, file);
    const img = await getDownloadURL(imageRef);
    if (!img) {
      toast.error("Image upload failed!");
      return;
    }
    await fetch("https://fitp-be.vercel.app/setUserAvatar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, img }),
    }).then(async () => {
      await update({ image: img });
      reloadSession();
      revalidateT('/userParams')
      toast.success("Image update success!");
    });
  };
  return (
    <div className="mt-4 flex items-center gap-4">
      <Avatar className="h-16 w-16" src={img}></Avatar>
      <label
        className="p-2 bg-green text-white rounded-lg hover:cursor-pointer"
        htmlFor="fileInput"
      >
        Upload new
      </label>
      <input
        className=" hidden"
        name="fileInput"
        id="fileInput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageHandler}
      />
    </div>
  );
};

export default AvatarHandler;
