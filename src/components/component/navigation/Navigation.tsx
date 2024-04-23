import navilogo from '../../../../public/navi/navilogo.png'
import Image from 'next/image';
import Link from 'next/link';
import NavigationMobile from './NaviMobile/NavigationMobile';

const Navigation = () => {
  return ( 
    <div className="w-full bg-black fixed z-10 h-12 flex justify-between">
      <div className='relative w-14 rounded-full h-full'>
        <Image
          alt="image"
          src={navilogo}
          fill={true}
        ></Image>
      </div>
      <NavigationMobile></NavigationMobile>
    </div>
   );
}
 
export default Navigation;