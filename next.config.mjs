/** @type {import('next').NextConfig} */
const nextConfig = {
    auth: {
        providers: [
          {
            id: 'google',
            name: 'Google',
            type: 'oauth',
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        ],
      },
};



export default nextConfig;
