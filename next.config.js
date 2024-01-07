/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com"],
        loader: "cloudinary",
        path: "/images",
    },
    
    
};

module.exports = nextConfig;
