/** @type {import('next').NextConfig} */

const nextConfig = {
	poweredByHeader: false,
	env: {
	  APP_URL: process.env.REACT_APP_URL,
	  APP_ENV: process.env.REACT_APP_ENV,
	  APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	// images: {
	// 	remotePatterns: [
	// 	  {
	// 		 protocol: "https",
	// 		 hostname: "**",
	// 		 port: '**',
	// 		 pathname: "**",
	// 	  },
	// 	],
	//  },

	images: {
		formats:['image/avif', 'image/webp'],
		domains:["image.openmoviedb.com","kinopoiskapiunofficial.tech","avatars.mds.yandex.net"]
	},

	async rewrites() {
	  return [
		 {
			source: '/api/:path*',
			destination: 'http://localhost:4200/api/:path*',
		 },
		 {
			source: '/uploads/:path*',
			destination: 'http://localhost:4200/uploads/:path*',
		 },
	  ];
	},
 };
export default nextConfig;
