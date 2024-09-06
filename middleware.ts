import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
  defaultLoginRedirect,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLogIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Si c'est une route d'API d'authentification, rien à faire
  if (isApiAuthRoute) {
    return;  // Retourner void, ce qui est valide
  }

  // Si c'est une route d'authentification
  if (isAuthRoute) {
    if (isLogIn) {
      // Rediriger l'utilisateur s'il est déjà connecté
      return Response.redirect(new URL(defaultLoginRedirect, nextUrl));
    }
    // Continuer le traitement si non connecté
    return;
  }

  // chek for the private routes
  if (!isLogIn && !isPublicRoute){
    // Redirect the user to the login page
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // allow evry other route accesible
  return;
});



export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}