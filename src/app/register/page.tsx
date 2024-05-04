import Link from "next/link";

const Register = () => {
  return ( 
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Already have an account? <b/>
            <Link
              className="font-medium text-green hover:text-indigo-500  dark:hover:text-violet"
              href="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <input defaultValue="true" name="remember" type="hidden" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                autoComplete="name"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="name"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
            </div>
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
                autoComplete="new-password"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                autoComplete="new-password"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-2 focus:z-10 focus:border-green focus:outline-none focus:ring-green mt-2"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm text-white text-bold font-b"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </section>
   );
}
 
export default Register;