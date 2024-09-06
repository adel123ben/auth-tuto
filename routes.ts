/**
 * make all the route accesible to everyone (not logged in)
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
]

/**
 * this is the route accesible for login or create an account!
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]


/**
 * this is the route for the nextauth api
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"




/**
 * this is the route that when the user finiche login the tehy will be redirected to
 * @type {string}
 */
export const defaultLoginRedirect = "/settings"