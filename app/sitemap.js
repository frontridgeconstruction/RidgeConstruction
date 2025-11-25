export default function sitemap() {
	const baseUrl = 'https://frontridge.ca'

	const routes = [
		'',
		'/about-us',
		'/services',
		'/our-works',
		'/contact',
		'/our-works/secret-kitchen',
		'/our-works/shelbys',
		'/our-works/mabelle-dental',
		'/our-works/greenbook-dentistry',
		'/our-works/dough-box',
		'/our-works/burger-king',
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === '' ? 'daily' : 'weekly',
		priority: route === '' ? 1 : route.includes('/our-works/') ? 0.6 : 0.8,
	}))

	return routes
}
