import Image from "next/image";
import blurAvatar from '@public/navi/blurAvatar.jpg'

const Avatar = ({className, src} : {className?: string, src? : string}) => {
  return ( 
    <div className={`relative w-8 h-8 rounded-3xl p-2 bg-white ${className}`}>
      <Image className='rounded-3xl hover:cursor-pointer' alt="AV" fill={true} src={src || blurAvatar}  />
    </div>
   );
}
 
export default Avatar;