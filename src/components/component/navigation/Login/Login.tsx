import Link from "next/link";

const Login = () => {
  return ( 
    <>
      <li className="p-2 rounded-xl hover:text-white"><Link href='/register'>Sign up</Link></li>
      <li className="p-2 rounded-x hover:text-white"><Link href='/login'>Sign in</Link></li>
    </>
   );
}
 
export default Login;