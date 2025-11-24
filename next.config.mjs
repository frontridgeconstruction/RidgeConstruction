/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
		// Disable Next.js image optimization - use Cloudinary's optimization instead
		unoptimized: true,
	},
	reactCompiler: true,
}

export default nextConfig
