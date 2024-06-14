import Image from "next/image";
import blurAvatar from '@public/navi/blurAvatar.jpg'

const Avatar = ({className, src} : {className?: string, src? : string}) => {
  return ( 
    <div className={`relative rounded-3xl p-2 bg-white ${className ? className : 'w-10 h-10'}`}>
      <Image className='rounded-3xl hover:cursor-pointer' alt="AV" fill={true} sizes="100%" src={src || blurAvatar}  />
    </div>
   );
}
 
export default Avatar;