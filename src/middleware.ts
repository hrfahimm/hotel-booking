export { default } from 'next-auth/middleware'


export const config = {
    matcher: ['/users/:path*']

}

// export const config = {
//     matcher: ['/users/:path*', '/api/:path*']

// }