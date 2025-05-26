// import type { NextRequest } from "next/server";
// import { i18n } from "./core/lib/i18n.config";
// import createMiddleware from "next-intl/middleware";

// export function middleware(request: NextRequest) {
//   const nextIntlMiddleware = createMiddleware({
//     locales: i18n.locales,
//     defaultLocale: i18n.defaultLocale,
//     localeDetection: true,
//   });
//   const response = nextIntlMiddleware(request);
//   response.headers.set("x-path", request.nextUrl.pathname);

//   return response;
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//     "/([\\w-]+)?/users/(.+)",
//   ],
// };
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};