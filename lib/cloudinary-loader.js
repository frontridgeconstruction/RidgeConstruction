export default function cloudinaryLoader({src, width, quality}) {
	if (src.includes('res.cloudinary.com')) {
		const match = src.match(/\/upload\/(?:v\d+\/)?(.+)$/)
		if (match) {
			const publicId = match[1]
			const cloudName =
				src.match(/res\.cloudinary\.com\/([^\/]+)/)?.[1] || 'duor8d5e3'

			const transformations = [
				`w_${width}`,
				`q_${quality || 'auto'}`,
				'f_auto',
				'c_fill',
				'g_auto',
			].join(',')

			return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`
		}
	}
	// For non-Cloudinary images (like Unsplash), return as-is
	// You might want to proxy these through Cloudinary as well for consistency
	return src
}
