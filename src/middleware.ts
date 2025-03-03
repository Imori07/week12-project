import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//we will use this to determine which paths are public and which paths are protected
//find a match for the route user-profile and any nested route inside too
//we are focusing on finding matches for protected routes
const isProtectedRoute = createRouteMatcher(['/user-profile(.*)']);

export default clerkMiddleware(async (auth, req) => {
  //we will specific that we want ot protect certain paths
  //if the request comes from a protected route, trigger the authentication flow
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
