
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) { 
  console.log("MIDDLEWARE")

}
export const config = {
  matcher: '/assistent',
}