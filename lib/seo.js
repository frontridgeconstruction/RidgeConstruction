export const jsonLdOrganization = {
	'@context': 'https://schema.org',
	'@type': 'GeneralContractor',
	name: 'Front Ridge Construction',
	image: 'https://frontridge.ca/logo.png',
	'@id': 'https://frontridge.ca',
	url: 'https://frontridge.ca',
	telephone: '+1-416-433-3383',
	email: 'Info@frontridge.ca',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '46 Squire Ellis Drive',
		addressLocality: 'Brampton',
		addressRegion: 'ON',
		postalCode: 'L6P 4C2',
		addressCountry: 'CA',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 43.7315,
		longitude: -79.7624,
	},
	areaServed: [
		{
			'@type': 'City',
			name: 'Brampton',
		},
		{
			'@type': 'City',
			name: 'Toronto',
		},
		{
			'@type': 'State',
			name: 'Ontario',
		},
	],
	sameAs: [
		// Add your social media URLs here
		// 'https://www.facebook.com/frontridgeconstruction',
		// 'https://www.linkedin.com/company/frontridgeconstruction',
		// 'https://www.instagram.com/frontridgeconstruction',
	],
	priceRange: '$$',
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '18:00',
		},
	],
}

export const jsonLdLocalBusiness = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://frontridge.ca/#business',
	name: 'Front Ridge Construction',
	description:
		'Premier construction company in Canada specializing in restaurants, healthcare facilities, corporate offices, and commercial buildings.',
	image: 'https://frontridge.ca/logo.png',
	url: 'https://frontridge.ca',
	telephone: '+1-416-433-3383',
	email: 'Info@frontridge.ca',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '46 Squire Ellis Drive',
		addressLocality: 'Brampton',
		addressRegion: 'ON',
		postalCode: 'L6P 4C2',
		addressCountry: 'CA',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 43.7315,
		longitude: -79.7624,
	},
	hasMap:
		'https://maps.google.com/?q=46+Squire+Ellis+Drive,+Brampton,+ON+L6P+4C2',
}

export const jsonLdWebsite = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': 'https://frontridge.ca/#website',
	url: 'https://frontridge.ca',
	name: 'Front Ridge Construction',
	description:
		'Leading construction company in Canada specializing in commercial and industrial construction services.',
	publisher: {
		'@id': 'https://frontridge.ca/#organization',
	},
	inLanguage: 'en-CA',
}

export const jsonLdBreadcrumb = (items) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: `https://frontridge.ca${item.url}`,
	})),
})

export const jsonLdService = (service) => ({
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: service.name,
	provider: {
		'@id': 'https://frontridge.ca/#organization',
	},
	areaServed: {
		'@type': 'State',
		name: 'Ontario',
	},
	description: service.description,
})
