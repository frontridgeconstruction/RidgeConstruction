import {v2 as cloudinary} from 'cloudinary'

const {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} =
	process.env

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
	console.warn(
		'Cloudinary environment variables are not fully configured. Image uploads may fail.'
	)
}

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
})

/**
 * Generate an optimized Cloudinary URL with transformations
 * @param {string} publicId - The Cloudinary public ID or full URL
 * @param {Object} options - Transformation options
 * @returns {string} Optimized Cloudinary URL
 */
export function getOptimizedCloudinaryUrl(publicId, options = {}) {
	const {
		width = 1200,
		quality = 'auto',
		format = 'auto',
		crop = 'fill',
		gravity = 'auto',
	} = options

	// Extract public ID from full Cloudinary URL if provided
	let id = publicId
	if (publicId.includes('cloudinary.com')) {
		const match = publicId.match(/\/upload\/(?:v\d+\/)?(.+)\.\w+$/)
		if (match) {
			id = match[1]
		}
	}

	// Build transformation string
	const transformations = [
		`w_${width}`,
		`q_${quality}`,
		`f_${format}`,
		`c_${crop}`,
		gravity !== 'auto' ? `g_${gravity}` : '',
	]
		.filter(Boolean)
		.join(',')

	const cloudName = CLOUDINARY_CLOUD_NAME || 'duor8d5e3'
	return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${id}`
}

export {cloudinary}
