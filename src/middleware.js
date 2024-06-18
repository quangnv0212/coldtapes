import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const ip = request.headers.get("x-forwarded-for") || request.ip;

  if (
    request.nextUrl.pathname == "/" ||
    request.nextUrl.pathname == "/pricing"
  ) {
    const res = await fetch(
      `https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_API_KEY}`
    );
    const location = await res.json();
    const country = location.country; // Get the country code

    if (country != "GB" && request.nextUrl.pathname == "/") {
      return NextResponse.redirect(request.nextUrl.origin + "/us");
    }

    if (country != "GB" && request.nextUrl.pathname == "/pricing") {
      return NextResponse.redirect(request.nextUrl.origin + "/pricing/us");
    }
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
