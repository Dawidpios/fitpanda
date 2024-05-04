import Link from "next/link";
const SignIn = () => {
  return (
    <section className="w-full h-auto mt-10 flex flex-col">
      <h2 className="text-center text-2xl text-white">Sign in to your account</h2>
      <h3 className="text-center text-lg text-white">
        Or sign up for a <b></b>
        <Link className="text-lg text-green" href="/register">
          new account
        </Link>
      </h3>
      <form action="#" className="w-90 lg:w-1/3 self-center mt-8 space-y-6" method="POST">
        <input defaultValue="true" name="remember" type="hidden" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label className="sr-only" htmlFor="email-address">
              Email address
            </label>
            <input
              autoComplete="email"
              className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
              id="email-address"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
        </div>
        <button className="w-full self-center p-2 bg-green text-white text-xl rounded-lg">Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;
